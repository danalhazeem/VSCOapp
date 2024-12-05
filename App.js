import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./src/components/screens/ProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import DrawerMenu from "./src/components/screens/DrawerMenu";
import VSCOStudio from "./src/components/screens/VSCOStudio";
import DiscoverPage from "./src/components/screens/DiscoverPage";

export default function App() {
  return (

  
    <NavigationContainer>

        {/* <MyDrawer /> */}
        {/* <ProfileScreen /> */}
        <VSCOStudio />
        {/* <DiscoverPage /> */}
        {/* <DrawerMenu /> */}
      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
