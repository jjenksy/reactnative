import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailScreen";
import ImageScreen from "./screens/ImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App_to_Home">
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Home_to_Details" component={DetailsScreen} />
        <Stack.Screen name="Details_to_Details" component={DetailsScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
