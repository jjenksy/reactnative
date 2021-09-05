import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  ListRenderItem,
} from "react-native";
import Styles from "./Styles";


const Chat = ({ username, image }) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState([]);


  return (
    <View style={Styles.container}>
          <Text>Hi { username }! You can chat here shortly.</Text>

    </View>
  );
};

export default Chat;

