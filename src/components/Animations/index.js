import React from "react";
import { Animated } from "react-native";

const Animations = ({ duration = 1500, ...props }) => {
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation, duration]);

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnimation }}>
      {props.children}
    </Animated.View>
  );
};

export default Animations;
