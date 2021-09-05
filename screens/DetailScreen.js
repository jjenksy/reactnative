import React, {useEffect, useState} from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Chat from "../components/Chat";



const DetailsScreen = ({ navigation, route }) => {
  ////omdb API url https://www.omdbapi.com/?t=Star+Wars&y=1977&apikey=50f6d5b1
  const { name } = route.params;
  console.log(name);
  return (
      <Chat username={name}></Chat>
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
export default DetailsScreen;
