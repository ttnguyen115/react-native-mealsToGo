import React from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/SafeArea";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { AuthenticationContext } from "../../services/authentication/context";

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = React.useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Typography variant="label">{user.email}</Typography>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export default SettingsScreen;
