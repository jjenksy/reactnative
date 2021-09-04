import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Image Screen</Text>
      <Button
        title="Go to no where"
        onPress={() => {
          console.log("Go to no where");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageScreen;
