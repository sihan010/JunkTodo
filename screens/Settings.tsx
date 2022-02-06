import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import ChildHeader from "../components/ChildHeader";
import { NavigationProps } from "../navigation";
import { Paragraph, Title, useTheme } from "react-native-paper";

const Settings = () => {
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.surface,
      }}
    >
      <ChildHeader navigation={navigation} screenName="Settings" />
      <View style={styles.container}>
        <Title>Settings</Title>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
