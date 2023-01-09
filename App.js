import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { useRouts } from "./router";

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

  const navigation = useRouts(true);

  return <NavigationContainer>{navigation}</NavigationContainer>;
}
