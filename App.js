import { useEffect } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from "./Screens/AuthScreens/RegistrationScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import Home from "./Screens/MainScreens/Home";

import { useRouts } from "./useRouts";

export default function App() {
  // useEffect(() => {
  //   const onRotate = () => {
  //     const width = Dimensions.get("window").width;
  //   };
  //   Dimensions.addEventListener("change", onRotate);
  //   return () => {
  //     Dimensions.removeEventListener("change", onRotate);
  //   };
  // }, []);

  //Fonts
  const [fontsLoaded] = useFonts({
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Rubik: require("./assets/fonts/RubikGemstones-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  const Stack = createStackNavigator();
  const MainStack = createStackNavigator();
  const navigation = useRouts(true);

  return <NavigationContainer>{navigation}</NavigationContainer>;
}
