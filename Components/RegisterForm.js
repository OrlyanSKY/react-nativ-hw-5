import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import { useState } from "react";
import AppButton from "./AppButton";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegisterForm = ({ onFocus, onBlur }) => {
  const [state, setState] = useState(initialState);

  const [loginFocused, setLoginFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);

  const handlePassVisibility = () => {
    if (isPasswordVisibile) {
      setIsPasswordVisibile(false);
      return;
    }
    setIsPasswordVisibile(true);
  };

  const onRegister = () => {
    console.log(state);
    setState(initialState);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Логин"
        placeholderTextColor="#BDBDBD"
        value={state.login}
        onChangeText={(text) =>
          setState((prevState) => ({ ...prevState, login: text }))
        }
        style={
          loginFocused ? { ...styles.input, ...styles.onFocused } : styles.input
        }
        onFocus={() => {
          onFocus();
          setLoginFocused(true);
        }}
        onBlur={() => {
          onBlur();
          setLoginFocused(false);
        }}
      />
      <TextInput
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        value={state.email}
        onChangeText={(text) =>
          setState((prevState) => ({ ...prevState, email: text }))
        }
        style={
          emailFocused ? { ...styles.input, ...styles.onFocused } : styles.input
        }
        onFocus={() => {
          onFocus();
          setEmailFocused(true);
        }}
        onBlur={() => {
          onBlur();
          setEmailFocused(false);
        }}
      />
      <View style={styles.pressableBox}>
        <TextInput
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={!isPasswordVisibile}
          onFocus={() => {
            onFocus();
            setPasswordFocused(true);
          }}
          onBlur={() => {
            onBlur();
            setPasswordFocused(false);
          }}
          value={state.password}
          onChangeText={(text) =>
            setState((prevState) => ({ ...prevState, password: text }))
          }
          style={
            passwordFocused
              ? { ...styles.input, marginBottom: 0, ...styles.onFocused }
              : { ...styles.input, marginBottom: 0 }
          }
        />
        <Pressable
          onPress={handlePassVisibility}
          style={[
            styles.innerText,
            {
              transform: [{ translateY: -10 }],
            },
          ]}
        >
          <Text style={styles.showField}>
            {!isPasswordVisibile ? "Показать" : "Скрыть"}
          </Text>
        </Pressable>
      </View>
      <AppButton title={"Зарегистрироваться"} onPress={onRegister} />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  form: {},
  input: {
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  onFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
  },
  pressableBox: {
    position: "relative",

    marginBottom: 43,
  },
  innerText: {
    position: "absolute",
    right: 16,
    top: "50%",
  },
  showField: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
