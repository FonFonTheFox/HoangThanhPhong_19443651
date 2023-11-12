import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome to cafe world</Text>
      <Pressable style={styles.pressable}
      onPress={() => navigation.navigate('Screen02')}>
        Return to Screen02
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
  },
  image:{
    width:"100px",
    height:"100px",
  },
  pressable:{
    width:"60%",
    height:"50px",
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
  },

});