import { StyleSheet, TextInput, Keyboard, View } from "react-native";
import { useState } from "react";

import AppButton from "./AppButton";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({ onFocus, onBlur }) => {
  const [state, setState] = useState(initialState);

  const onLogin = () => {
    console.log(state);
    setState(initialState);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        value={state.email}
        onChangeText={(text) =>
          setState((prevState) => ({ ...prevState, email: text }))
        }
        style={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <TextInput
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        secureTextEntry={true}
        onFocus={onFocus}
        onBlur={onBlur}
        value={state.password}
        onChangeText={(text) =>
          setState((prevState) => ({ ...prevState, password: text }))
        }
        style={{ ...styles.input, marginBottom: 43 }}
      />
      <AppButton title={"Зарегистрироваться"} onPress={onLogin} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
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
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});
