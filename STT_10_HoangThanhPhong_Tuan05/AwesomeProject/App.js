import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { TextInput } from 'react-native-web';
import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thực hiện xử lý đăng nhập ở đây, ví dụ kiểm tra tên và mật khẩu và thực hiện đăng nhập
    if (username === 'Phong' && password === '123') {
      // Đăng nhập thành công
      alert('Đăng nhập thành công');
    } else {
      // Đăng nhập thất bại
      alert('Đăng nhập thất bại. Vui lòng kiểm tra tên và mật khẩu.');
    }
  };

  return (
    <View style={styles.container1}>
      <View style={styles.smallcontainer1}>
        <Text style={styles.text1}>Login</Text>
      </View>
      <View style={styles.smallcontainer2}>
        <View style={styles.name}>
          <Image source={require("./user.png")} style={styles.image}></Image>
          <TextInput
            style={styles.nametext}
            placeholder="Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.password}>
          <Image source={require("./password.png")} style={styles.image}></Image>
          <TextInput
            style={styles.passwordtext}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Image source={require("./showpass.png")} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.smallcontainer3}>
        <Pressable style={styles.pressable} onPress={handleLogin}>
          <Text style={styles.text2}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.smallcontainer4}>
        <Text style={styles.text3}>Forgot Your Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor:"yellow",
    //backgroundImage: 'linear-gradient(to right, #ff0000, #0000ff)',
  },
  text1:{
    fontSize:80,
  },
  smallcontainer1: {
    flex: 1,
  },
  smallcontainer2: {
    flex: 1,
  },
  image:
  {
    width:"60px",
    height:"60px",
  },
  name: {
    width:"100%",
    height:"60px",
    borderRadius:"10px",
    borderWidth:1,
    borderColor:"black",
    flexDirection:'row',
    justifyContent:"space-evenly",
  },

  nametext:{
    width:"100%",
    height:"60px",
    flexDirection:'row',
    justifyContent:"space-evenly",
  },

  password: {
    marginTop:"10px",
    width:"100%",
    height:"60px",
    borderRadius:"10px",
    borderWidth:1,
    borderColor:"black",
    flexDirection:'row',
    justifyContent:"space-evenly",
  },

  passwordtext:{
    width:"100%",
    height:"60px",
    flexDirection:'row',
    justifyContent:"space-evenly",
  },
 
  smallcontainer3: {
    flex:1,
  },
  pressable:{
    margin:"10%",
    width:"80%",
    height:"70px",
    borderRadius:"5px",
    borderWidth:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
  },

  text2:{
    textAlign:"center",
    color:"white",
    fontSize:30,
  },
  
  smallcontainer4: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
  text3:{
    textAlign:"center",
    fontSize:30,
  },
});
