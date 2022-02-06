import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import About from "./screens/About";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  About: {
    dummy: number;
  };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type NavigationProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();
const MainNavigation = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        initialParams={{ dummy: -1 }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
