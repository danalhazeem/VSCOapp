import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { User, Search, Bell } from "lucide-react-native"; // Import icons
import images from "../data/images";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const [query, setQuery] = useState(""); // State for search query
  const [foundUser, setFoundUser] = useState(null); // State to track if user exists

  // Filter usernames based on search query
  const handleSearch = (text) => {
    setQuery(text);
    const user = images.find((item) =>
      item.username.toLowerCase().includes(text.toLowerCase())
    );
    setFoundUser(user);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Search Bar */}
          <TextInput
            style={styles.input}
            placeholder="Search by username"
            value={query}
            onChangeText={handleSearch}
          />

          {/* Displaying User Profile Card */}
          {foundUser ? (
            <View style={styles.profileCard}>
              <View style={styles.profileInfo}>
                <User size={24} color="white" />
                <Text style={styles.username}>{foundUser.username}</Text>
                <Text style={styles.date}>Joined: {foundUser.date}</Text>
              </View>

              <View style={styles.icons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Bell size={20} color="white" />
                  <Text style={styles.iconLabel}>Notify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Search size={20} color="white" />
                  <Text style={styles.iconLabel}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            query && (
              <Text style={styles.noResult}>
                No user found with this username
              </Text>
            )
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010", // Matching the dark theme
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
    width: "100%",
    color: "white", // White text to match theme
  },
  profileCard: {
    backgroundColor: "#181818", // Dark card background
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginLeft: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconButton: {
    alignItems: "center",
  },
  iconLabel: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  noResult: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SearchScreen;
