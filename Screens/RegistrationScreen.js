import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import RegisterForm from "../Components/RegisterForm";

const RegistrationScreen = () => {
  const image = require("../assets/images/PhotoBG.jpg");
  const [fontsLoaded] = useFonts({
    Roboto500: require("../assets/fonts/Roboto-Medium.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Rubik: require("../assets/fonts/RubikGemstones-Regular.ttf"),
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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Регистрация</Text>
      </View>
      <RegisterForm />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleBox: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto500",
    fontSize: 30,
    letterSpacing: 0.16,
    lineHeight: 35,
    color: "#212121",
  },
});
