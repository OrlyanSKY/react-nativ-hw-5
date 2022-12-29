import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import LoginForm from "../../Components/LoginForm";
import { useState } from "react";
// import RegisterForm from "../Components/RegisterForm";

const LoginScreen = ({ navigation }) => {
  const image = require("../../assets/images/PhotoBG.jpg");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const onFocus = () => {
    setIsShowKeyboard(true);
  };
  const onBlur = () => {
    setIsShowKeyboard(false);
  };

  return (
    <View style={styles.mainBox}>
      <ImageBackground source={image} style={styles.background}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View
              style={{
                ...styles.inner,
                marginBottom: isShowKeyboard ? -130 : 0,
              }}
            >
              <View style={styles.titleBox}>
                <Text style={styles.title}>Войти</Text>
              </View>
              <LoginForm onFocus={onFocus} onBlur={onBlur} />
              <View style={styles.linkBox}>
                <Text style={styles.linkText}>Нет аккаунта?</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Register")}
                  style={styles.link}
                >
                  <Text style={{ ...styles.linkText, fontFamily: "Roboto500" }}>
                    Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inner: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 111,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,

    left: "50%",

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    height: 25,
    width: 25,
    left: 107,
    top: 81,
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
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  linkBox: {
    marginTop: 16,
    justifyContent: "center",
    flexDirection: "row",
  },
  link: {
    marginLeft: 2,
  },
  linkText: {
    color: "#1B4371",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
});
