import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PersonalInfo from '../components/PersonalInfo';
import Styles from '../components/Styles';



const HomeScreen = ({ navigation, route }) => {
    
    return (
      <SafeAreaView style={Styles.container}>
        {/* <Text>Home Screen</Text>
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
        </TouchableOpacity> */}
        <PersonalInfo></PersonalInfo>
      </SafeAreaView>
    );
}
export default HomeScreen;