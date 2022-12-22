import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  const image = require("./assets/images/PhotoBG.jpg");
  return (
    <ImageBackground source={image} style={styles.container}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
