import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PersonalInfo from '../components/PersonalInfo';
import Styles from '../components/Styles';


const HomeScreen = ({ navigation, route }) => {
    return (
      <SafeAreaView style={Styles.container}>
        <PersonalInfo navigation={navigation} route={route}></PersonalInfo>
      </SafeAreaView>
    );
}
export default HomeScreen;