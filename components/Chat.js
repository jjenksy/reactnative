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
import { RenderChatItem } from "./ChatItem";

const Chat = ({ username, image }) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState([]);
    
  const renderItem = ({ item }) => (<RenderChatItem chatItem={item} username={username}></RenderChatItem>);

  return (
    <View style={Styles.container}>
      <FlatList
        inverted
        data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
      <View style={Styles.sendSection}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => {
            setChatInput(text);
          }}
        ></TextInput>
        <Button
          title="Send"
          onPress={() => {
            setChatItemList([
              ...chatItemList,
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                image: image,
                timestamp: Date.now(),
                by: username,
              },
            ]);
            console.log(chatItemList);
            setChatInput("");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Chat;

