import React from "react";
import { Platform, Text } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";

const CompactRestaurantInfo = ({ restaurant }) => {
  const isAndroid = Platform.OS === "android";
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export default CompactRestaurantInfo;
