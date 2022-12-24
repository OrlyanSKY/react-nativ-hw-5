import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {},
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
