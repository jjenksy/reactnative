

import React, {useState} from "react";
import { Button, View, Text, Image, TextInput } from "react-native";
import ImageChooser from "./ImageChooser";
import Styles from "./Styles";
const PersonalInfo = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

  return (
    <View style={Styles.personalInfoContainer}>
      <Image
        style={Styles.logo}
        source={require("../assets/LogicodeSticker.png")}
      ></Image>
      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please enter your name:</Text>
              <TextInput style={Styles.nameTextInput} onChangeText={(text) => {
                  setName(text);
        }} value={name} />
          </View>
          <ImageChooser onChangeImage={(image)=> setImage(image)}></ImageChooser>
      <Button
        title="Start chat"
        onPress={() => {
          console.log("Nada");
        }}
      ></Button>
    </View>
  );
};


export default PersonalInfo;