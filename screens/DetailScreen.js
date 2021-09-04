import React, {useEffect, useState} from "react";
import { Button, View, Text, StyleSheet } from "react-native";



const DetailsScreen = ({ navigation, route }) => {
  ////omdb API url https://www.omdbapi.com/?t=Star+Wars&y=1977&apikey=50f6d5b1
  console.log(route);
  const { screenNumber } = route.params;
  const [data, setData] = useState();
 

  useEffect(() => {
     const xhr = new XMLHttpRequest();
     xhr.open(
       "GET",
       "https://www.omdbapi.com/?t=Star+Wars&y=1977&apikey=50f6d5b1"
     );
     xhr.send();

    xhr.onload = () => {
      const respone = JSON.parse(xhr.responseText);
      console.log(respone);
      setData(respone);
    }
   
  }, []);

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => {
        //this method is used to grant the touch event
        console.log("Set responder should start!");
        return true;
      }}
      onResponderGrant={() => {
        //this fires in onStartShouldSetResponder returns true
        console.log("Second view granted respone!");
      }}
      onResponderRelease={() => {
        //this is fired when touch ends
        console.log("On responder release! ");
      }}
    >
      {data ?
        <View>
          <Text>{data.Title}</Text>
          <Text>{data.Released}</Text>
          <Text>{data.Runtime}</Text>
        </View>
        :
        
        <Text>No Data</Text>}
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
export default DetailsScreen;
