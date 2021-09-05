

import React, {useState, useEffect} from "react";
import { Button, View, Text, Image, TextInput } from "react-native";
import ImageChooser from "./ImageChooser";
import Styles from "./Styles";
import { getData, storeData } from "../utils/storage";

const PersonalInfo = ({ navigation, route }) => {
  const nameKey = 'name';
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

    useEffect(() => {
      async function getName() {
          const response = await getData(nameKey);
          if (response) setName(response);
      }
      getName();
    }, []);
  return (
    <View style={Styles.personalInfoContainer}>
      <Image
        style={Styles.logo}
        source={require("../assets/LogicodeSticker.png")}
      ></Image>
      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please enter your name:</Text>
        <TextInput
          style={Styles.nameTextInput}
                  onChangeText={(text) => {
                      setName(text);
          }}
          value={name}
        />
      </View>
      <ImageChooser onChangeImage={(image) => setImage(image)}></ImageChooser>
      <Button
        title="Start chat"
        onPress={async () => {
            await storeData(nameKey, name);
            navigation.navigate("Chat", { name: name });
        }}
      ></Button>
    </View>
  );
};


export default PersonalInfo;