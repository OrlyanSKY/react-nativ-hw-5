import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/AuthScreens/RegistrationScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";

import Home from "./Screens/MainScreens/Home";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRouts = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};
