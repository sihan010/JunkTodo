import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Appbar, Headline, useTheme } from "react-native-paper";
import { NavigationProps } from "../navigation";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface MainHeaderProps {
  navigation: NavigationProps;
  appName: string;
}

const MainHeader = ({ navigation, appName }: MainHeaderProps) => {
  const theme = useTheme();

  const gotoSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ height: 48, width: 48, marginRight: 5 }}
          />
          <Headline>{appName}</Headline>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: 70,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon name="cog" size={28} style={{ marginHorizontal: 2 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("About", { dummy: 5 })}
          >
            <Icon
              name="information"
              size={28}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Appbar.Header>
  );
};

export default MainHeader;
