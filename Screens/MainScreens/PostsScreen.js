import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.title, fontFamily: "Roboto500" }}>
          Публикации
        </Text>
        <TouchableOpacity
          style={styles.logOutBtn}
          // onPress={() => navigation.navigate("Login")}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image
          style={{ marginRight: 8, borderRadius: 16 }}
          source={require("../../assets/images/UserFace.jpg")}
        />
        <View>
          <Text style={{ fontFamily: "Roboto500" }}>userLogin</Text>
          <Text style={{ fontFamily: "Roboto400" }}>userEmail</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 55,
    paddingBottom: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    marginRight: "auto",
    marginLeft: "auto",
  },

  logOutBtn: {
    marginRight: 10,
  },
  userInfo: {
    paddingLeft: 16,
    paddingTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
});
