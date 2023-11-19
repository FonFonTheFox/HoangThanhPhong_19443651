import { StyleSheet,} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01" screenOptions={{gestureEnabled: true}}>
        <Stack.Screen name="Screen01" component={Screen01}/>
        <Stack.Screen name="Screen02" component={Screen02}/>
        <Stack.Screen name="Screen03" component={Screen03}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});