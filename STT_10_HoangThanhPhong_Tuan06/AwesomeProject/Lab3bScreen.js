import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Lab3bScreen() {
    const [selectedColor, setSelectedColor] = useState('black'); // Xac dinh mau sac
    const navigation = useNavigation();

    // Dinh nghia Mapping cho cac mau sac
    const colorImageMap = {
        black: require("./vs_black.png"),
        blue: require("./vs_blue.png"),
        red: require("./vs_red.png"),
        silver: require("./vs_silver.png"),
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <View style={styles.container}>
            <View style={styles.smallcontainer1}>
                <Image 
                style={styles.image1} 
                source={colorImageMap[selectedColor]} 
                />
                <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={styles.smallcontainer2}>
                <Text style={styles.text2}>Chọn màu bên dưới</Text>
                <View style={styles.smallcontainer3}>
                    <Pressable
                        style={[styles.Pressable, { backgroundColor: 'black' }]}
                        onPress={() => handleColorChange('black')}
                    />
                    <Pressable
                        style={[styles.Pressable, { backgroundColor: 'blue' }]}
                        onPress={() => handleColorChange('blue')}
                    />
                    <Pressable
                        style={[styles.Pressable, { backgroundColor: 'red' }]}
                        onPress={() => handleColorChange('red')}
                    />
                    <Pressable
                        style={[styles.Pressable, { backgroundColor: 'silver' }]}
                        onPress={() => handleColorChange('silver')}
                    />
                    <Pressable 
                    onPress={() => navigation.navigate("Home")} 
                    style={styles.pressable2}
                    >
                        <Text style={styles.text3}>Xong</Text>
                    </Pressable>
                </View>
            </View>
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallcontainer1: {
        flexDirection: "row",
        flex: 3,
        width: "100%",
    },
    image1: {
        width: 100,
        height: 120,
    },
    text1: {
        fontSize: 20,
        padding: 30,
    },
    smallcontainer2: {
        flex: 7,
        backgroundColor: "gray",
        width: "100%",
    },
    text2: {
        fontSize: 20,
        paddingTop: 20,
    },
    smallcontainer3: {
        flex: 1,
        alignItems: 'center',
    },

    Pressable: {
        width: 70,
        height: 70,
        marginTop: 10,
    },

    pressable2:{
        marginTop: 10,
        width:"80%",
        padding: 15,
        backgroundColor: 'blue',
        borderRadius: 20 ,
    },

    text3:{
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 600,
        fontSize: 18 ,
    },
});
