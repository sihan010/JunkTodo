import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import MainNavigation from "./navigation";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./features/store";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useState } from "react";
import { darkTheme, theme } from "./theme";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  let [fontsLoaded] = useFonts({
    "Oswald-Regular": require("./assets/Oswald-Regular.ttf"),
    "Oswald-Medium": require("./assets/Oswald-Medium.ttf"),
    "Oswald-Light": require("./assets/Oswald-Light.ttf"),
    "Oswald-Thin": require("./assets/Oswald-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <PaperProvider theme={isDark ? darkTheme : theme}>
          <MainNavigation />
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default App;
