import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Star, Repeat, MessageCircle, Share2, Bell } from "lucide-react-native";

const ImageDetails = ({ image, username, date }) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* User Info */}
        <View style={styles.userRow}>
          <Text style={styles.username}>{username}</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Notification and Date */}
        <View style={styles.notificationRow}>
          <Bell size={20} color="white" />
          <Text style={styles.dateText}>{date}</Text>
        </View>

        {/* Icons Row */}
        <View style={styles.iconsRow}>
          <TouchableOpacity>
            <Star size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Repeat size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MessageCircle size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Share2 size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#101010",
  },
  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  followButton: {
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  followText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#101010",
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateText: {
    color: "gray",
    fontSize: 14,
    marginLeft: 8,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
});
