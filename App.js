import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNav/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import DrawerMenu from "./src/components/screens/DrawerMenu";
import VSCOStudio from "./src/components/screens/VSCOStudio";
import DiscoverPage from "./src/components/screens/DiscoverPage";
import ProfileScreen from "./src/components/screens/ProfileScreen";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <MainNavigation />
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
    backgroundColor: "#101010",
  },
});
