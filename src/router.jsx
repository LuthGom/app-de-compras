import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Start from "./pages/Start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
