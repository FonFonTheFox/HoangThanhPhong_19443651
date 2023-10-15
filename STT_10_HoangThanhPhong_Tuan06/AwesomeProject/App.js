import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet,} from 'react-native';

import Lab3aScreen from './Lab3aScreen';
import Lab3bScreen from './Lab3bScreen';

export default function App() {
    const Stack = createStackNavigator();

    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' component={Lab3aScreen} />
                <Stack.Screen name='Detail' component={Lab3bScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});