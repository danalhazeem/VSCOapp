// import { Image, StyleSheet, Text, View } from "react-native";
// import React from "react";

// const ImageCard = ({ image, username, profileImage }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <Text style={styles.username}>{username}</Text>
//       <Image source={{ uri: profileImage }} style={styles.profileImage} />
//     </View>
//   );
// };

// export default ImageCard;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#101010",
//     borderRadius: 12,
//     overflow: "hidden",
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     padding: 20,
//   },
//   image: {
//     height: "500",
//     width: "90%",
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   username: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "white",
//   },
//   profileImage: {
//     height: 25,
//     width: 25,
//     borderRadius: 25,
//   },
// });

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageCard = ({ image, username, profileImage }) => {
  return (
    <View style={styles.card}>
      {/* Main Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Username and Profile Image */}
      <View style={styles.userInfo}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#101010",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
