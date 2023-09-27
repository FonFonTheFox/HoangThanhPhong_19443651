import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.view2}>
          <Text>Grow your Business</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.view3}>
          <button onclick="myFunction()">Click me</button>
          <StatusBar style="auto" />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%' ,
    height: '100%' ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to bottom, #ff0000, #0000ff)',
  },
  view1: {
    flex: 1,
    width: '100%' ,
    height: '100%' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    width: '100%' ,
    height: '100%' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    width: '100%' ,
    height: '100%' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
