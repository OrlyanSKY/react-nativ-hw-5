import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const RegisterForm = () => {
  return (
    <View style={styles.inputContatiner}>
      <TextInput
        placeholder="Логин"
        placeholderTextColor="#BDBDBD"
        //   value={""}
        //   onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        //   value={""}
        //   onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        //   value={""}
        //   onChangeText={text => setName(text)}
        style={[styles.input, styles.inputLastChild]}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  inputContatiner: {},
  input: {
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  inputLastChild: {
    marginBottom: 43,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
  },
});
