// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../../screens/Home";
// import Search from "../../screens/Search";
// import Studio from "../../screens/Studio";
// import Profile from "../../screens/Profile";

// const Tab = createBottomTabNavigator();
// const MainNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: "#101010",
//         },
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen name="Feed" component={Home} />
//       <Tab.Screen name="Discover" component={Search} />
//       <Tab.Screen name="Studio" component={Studio} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default MainNavigation;

// const styles = StyleSheet.create({});

import { StyleSheet, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Camera,
  User,
} from "lucide-react-native";
import Home from "../../screens/Home";
import Search from "../../screens/SearchScreen";
import Studio from "../../screens/Studio";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#101010",
          borderTopWidth: 0,
        },

        headerShadowVisible: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#555",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let Icon;

          switch (route.name) {
            case "Feed":
              Icon = HomeIcon;
              break;
            case "Discover":
              Icon = SearchIcon;
              break;
            case "Studio":
              Icon = Camera;
              break;
            case "Profile":
              Icon = User;
              break;
            default:
              Icon = HomeIcon;
          }

          return (
            <Icon
              color={color}
              size={size || 24}
              style={{
                marginTop: 20,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Discover" component={Search} />
      <Tab.Screen name="Studio" component={Studio} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
