import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import ChildHeader from "../components/ChildHeader";
import { NavigationProps, RootRouteProps } from "../navigation";
import { Divider, Paragraph, Title, useTheme } from "react-native-paper";

const About = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RootRouteProps<"About">>();
  const initialValue = route.params.dummy;
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.surface,
      }}
    >
      <ChildHeader navigation={navigation} screenName="About" />
      <View style={styles.container}>
        <Title>About Technology Stack</Title>
        <Divider style={{ width: "100%" }} />
        <Paragraph>React Native</Paragraph>
        <Paragraph>Expo SDK 44</Paragraph>
        <Paragraph>Redux-Toolkit</Paragraph>
        <Paragraph>Redux-Toolkit Thunk</Paragraph>
        <Paragraph>TypeScript</Paragraph>
        <Paragraph>React Navigation</Paragraph>
        <Paragraph>React Native Paper</Paragraph>
        <Paragraph>Data by JsonPlaceHolder</Paragraph>
        <Divider style={{ width: "100%" }} />
        <Title>A Template by Sihan</Title>
        <Paragraph>6 February 2022</Paragraph>
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

export default About;
