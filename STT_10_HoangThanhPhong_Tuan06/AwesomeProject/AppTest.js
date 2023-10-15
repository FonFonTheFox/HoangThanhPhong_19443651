
export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
            
            <View style={{ height:140,width:140,borderWidth:1,marginTop:100,borderRadius:100,borderWidth:15,borderColor:"blue"}}/>
  
            <View style={{height:58,width:192,marginTop:60}}>
              <Text style={{fontSize:25,lineHeight:27,textAlign:'center'}}>GROW YOUR BUSINESS</Text>
            </View>
            <View style={{height:36,width:302,marginTop:20}}>
              <Text style={{fontSize:15,lineHeight:17.58,textAlign:'center'}}>We will help you to grow your business using online server</Text>
            </View>
            <View style={{marginTop:80, height:48,width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
              <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>LOGIN</Text>
              </View>
              <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>SIGN UP</Text>
              </View>
            </View>
            <View style={{height:36,width:302,marginTop:30}}>
              <Text style={{fontSize:18,lineHeight:21.09,textAlign:'center'}}>HOW WE WORK?</Text>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      //Gradients in React-Native
      backgroundImage: 'linear-gradient(to bottom, #ff0000, #6000ff)',
    },
  });