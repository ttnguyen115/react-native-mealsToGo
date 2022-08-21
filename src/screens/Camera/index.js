import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Typography from "../../components/Typography";
import { AuthenticationContext } from "../../services/authentication/context";

const CameraScreen = ({ navigation }) => {
  const { user } = React.useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = React.useState(null);
  const cameraRef = React.useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (!hasPermission) {
    return <Typography>No access to camera</Typography>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        type={Camera.Constants.Type.front}
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export default CameraScreen;
