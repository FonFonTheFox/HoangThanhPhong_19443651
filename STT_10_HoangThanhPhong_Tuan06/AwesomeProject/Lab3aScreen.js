import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native"

export default function Lab3aScreen() {
    const navigation = useNavigation();
    return ( 
        <View style = { styles.container } >
            <Image style = { styles.image1 } source={require("./vs_black.png")}></Image>
            <Text style = { styles.text1 }> Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text> 
            <View style = { styles.smallcontainer1 } >
                <Image 
                style = { styles.image2 } 
                source={require("./star.png")}
                />
                <Image 
                style = { styles.image2 } 
                source={require("./star.png")}
                />
                <Image 
                style = { styles.image2 } 
                source={require("./star.png")}
                />
                <Image 
                style = { styles.image2 } 
                source={require("./star.png")}
                />
                <Image 
                style = { styles.image2 } 
                source={require("./star.png")}
                />
                <Text style = { styles.text2 }> 812 danh gia </Text> 
            </View>
            <View style = { styles.smallcontainer2 } >
                <Text style = { styles.text3 }> 1.200.000 d </Text>
                <Text style = { styles.text4 }> 3.400.000 d </Text> 
            </View>
            <View style = { styles.smallcontainer3 } >
                <Text style = { styles.text5 }> o dau re hon hoan tien </Text>
                <Image style = { styles.image3 } source={require("./more.png")}></Image>
            </View>
            <Pressable 
            style = { styles.pressable1 }
            onPress={() => { navigation.navigate('Detail') }}
            >
                <Text style = { styles.text6 }> 4 Mau _Chon Mau </Text>
                <Text style = { styles.text6 }></Text>
            </Pressable>
            <Pressable style = { styles.pressable2 }>Chon Mua</Pressable>
            <StatusBar style = "auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    image1: {
        width:"300px",
        height:"400px",
        
    },
 
    text1:{
        fontSize:20,
    },

    smallcontainer1:{
        width:"100%",
        paddingTop:"4%",
        flexDirection:'row',
    },

    image2: {
        width:"30px",
        height:"30px",
    },

    text2:{
        fontSize:18,
        paddingLeft:"40px",
        paddingTop:"4px",
    },

    smallcontainer2:{
        paddingTop:"4%",
        flexDirection:'row',
    },
    text3:{
        fontSize:22,
        fontWeight:"bold",
    },
    text4:{
        paddingLeft:"40px",
        paddingTop:"5px",
        fontSize:18,
        fontWeight:"bold",
        textDecorationLine:"line-through",
    },
    smallcontainer3:{
        flexDirection:'row',
        paddingRight:"30%",
        paddingTop:"4%",
    },
    text5:{
        paddingLeft:"15px",
        paddingTop:"4px",
        color:"red",
        fontSize:17,
        textTransform: 'uppercase'
    },
    image3:{
        width:"40px",
        height:"40px",
    },
    pressable1:{
        width:"80%",
        height:"30px",
        borderColor:'black',
        borderRadius:"10px",
        justifyContent:"center",
        alignItems:"center",
        textTransform: 'uppercase',
        borderWidth:"1px",
        flexDirection:"row",
    },
    text6:{
        fontSize:22,
    },
    pressable2:{
        marginTop:"12px",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        width:"80%",
        height:"30px",
        textTransform: 'uppercase',
        borderRadius:"10px",
        borderWidth:"1px",
        fontSize:22,
    },

});