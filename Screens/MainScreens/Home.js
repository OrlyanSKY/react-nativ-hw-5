import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../MainScreens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerStyle: { height: 68 },
        headerTitleStyle: {
          // marginBottom: 11,
          fontSize: 17,
          lineHeight: 22,
          color: "#212121",
        },
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }}
    >
      <Tab.Screen
        name="Post"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="grid" size={24} />,
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color="#FFFFFF" />
          ),
          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            width: 70,
            height: 10,
            borderRadius: 20,
          },
        }}
        style={{ height: 40 }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="#151515cc" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  addIcon: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
