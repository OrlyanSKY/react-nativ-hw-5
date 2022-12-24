import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import { useState } from "react";
import AppButton from "./AppButton";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegisterForm = ({ onFocus, onBlur, isFocused }) => {
  const [state, setState] = useState(initialState);

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
        style={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
      />
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
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});
