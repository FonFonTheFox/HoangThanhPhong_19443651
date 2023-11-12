import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.smallcontainer1}>
        <Text>Hi Twinkle</Text>
        <Text>Have agate day a head</Text>
      </View>
      <View style={styles.smallcontainer2}>
      <Pressable style={styles.pressable}
      onPress={() => navigation.navigate('Screen03')}>
        Return to Screen03
      </Pressable>
      </View>
      <View style={styles.smallcontainer3}>
        <Text>Adam</Text>
      </View>
      <Pressable style={styles.pressable}
      onPress={() => navigation.navigate('Screen01')}>
        Return to Screen01
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