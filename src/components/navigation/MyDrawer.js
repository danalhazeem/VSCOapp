// MyDrawer.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerMenu from "../screens/DrawerMenu"; // Import the custom Drawer Menu

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black", // Black background for the header
        },
        headerTintColor: "white", // White color for header text
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerIcon: ({ focused, size }) => (
          <Feather name="menu" size={size} color={focused ? "white" : "gray"} />
        ), // Custom Drawer icon (hamburger menu)
      }}
      drawerContent={(props) => <DrawerMenu {...props} />} // Use custom drawer
    >
      <Drawer.Screen name="danalhazeem" component={ProfileScreen} />
      <Drawer.Screen name="Profile" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
