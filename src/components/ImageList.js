import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ImageCard from "./ImageCard";
import images from "../data/images";

const ImageList = () => {
  return (
    <ScrollView>
      <Text style={styles.header}>Feed</Text>
      {images.map((image) => (
        <TouchableOpacity key={image.id}>
          <ImageCard
            image={image.image}
            username={image.username}
            profileImage={image.profileImage}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    padding: 20,
  },
});
