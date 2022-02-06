import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Appbar, Headline, useTheme } from "react-native-paper";
import { NavigationProps } from "../navigation";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface MainHeaderProps {
  navigation: NavigationProps;
  screenName: string;
}

const ChildHeader = ({ navigation, screenName }: MainHeaderProps) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
        <Headline>{screenName}</Headline>
      </View>
    </Appbar.Header>
  );
};

export default ChildHeader;
