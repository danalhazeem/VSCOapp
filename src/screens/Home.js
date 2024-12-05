import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ImageList from "../components/ImageList";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
