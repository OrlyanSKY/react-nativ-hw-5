import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={styles.snapshot}>
          <Feather name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  camera: {
    height: 240,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 8,
  },
  snapshot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
});
