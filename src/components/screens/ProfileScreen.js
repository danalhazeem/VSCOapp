import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const photos = [
  {
    id: "1",
    uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn_1-JT97NUFZv-7weT57EYnrRXA-NEhyfnmDlGqXbSznoyk_b",
    type: "recent",
  },
  {
    id: "2",
    uri: "https://lh5.googleusercontent.com/p/AF1QipP7QzMgP1LcKc31Gg1qEQZZMeUX9N7LBmydJsa8=w360-h240-n-k-no",
    type: "recent",
  },
  {
    id: "3",
    uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHiScbrLecmYYvUq9PS4Xb_5ScpU2BUanw8uBwaLkNJeZiapuu",
    type: "recent",
  },
  {
    id: "4",
    uri: "https://picsum.photos/400/400?random=4",
    type: "galleries",
  },
  {
    id: "5",
    uri: "https://picsum.photos/400/400?random=5",
    type: "recent",
  },
  {
    id: "6",
    uri: "https://picsum.photos/400/400?random=6",
    type: "recent",
  },
];

export default function ProfileScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("RECENT");

  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image
        source={{ uri: item.uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  const renderHeader = () => (
    <>
      <View style={styles.profileSection}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Feather name="plus-circle" size={24} color="#666" />
            </View>
          </View>
          <Text style={styles.username}>danalhazeem</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabs}>
        {["RECENT", "GALLERIES", "REPOSTS"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <Feather name="compass" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  actionButtons: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    gap: 10,
    justifyContent: "space-around",
  },
  editButton: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shareButton: {
    flex: 1,
    height: 40,
    backgroundColor: "#121212",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  editButtonText: {
    color: "black",
    fontWeight: "600",
  },
  shareButtonText: {
    color: "white",
    fontWeight: "600",
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginTop: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  tabText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "600",
  },
  activeTabText: {
    color: "white",
  },
  gridContainer: {
    paddingBottom: 20,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
