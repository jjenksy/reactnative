import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';




const HomeScreen = ({ navigation, route }) => {
    
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(route);
            console.log("Go to details");
            navigation.navigate("Home_to_Details", { screenNumber: 1 });
          }}
        >
          <View style={styles.touchableView}>
            <Text style={styles.touchableText}>Go to Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableView: {
    marginBottom: 30,
    width: 150,
    height: 50,
    alignItems: "center",
    backgroundColor: "orange",
    borderWidth: 5,
    borderRadius: 10,
  },
  touchableText: {
    textAlign: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});
export default HomeScreen;