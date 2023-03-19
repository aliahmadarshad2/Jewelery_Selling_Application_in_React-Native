import React ,{useEffect}from 'react'
import { View, Text,Image ,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
const Seperator = () => <View style = {styles.Seperator}/>


export default function cong({route,navigation}) {
    const { item,itemprice,body,city,id,itemimage} = route.params;
    console.log(itemimage);
    return (
        <View style={styles.container}>
                      <View style={{flex:8,flexDirection:'row',backgroundColor:'#E69720',elevation:100}}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} >
       <Text style={{color:'black',fontSize:35,fontWeight:'bold'}}>☚</Text>
       </TouchableOpacity>
       </View>
      <View>
          <TouchableOpacity
          onPress={()=>{
            firestore()
            .collection('Rings')
            .doc(id)
            .delete()
            .then(() => {
              console.log('User deleted!');
            });
          }}>
       <Text style={{color:'black',fontSize:35,fontWeight:'bold',marginLeft:"85%"}}>✘</Text>
       </TouchableOpacity>
       </View>
      </View>
            <View style={{flex:30}}>
            <Image style={ { resizeMode: 'contain',width:400,height:220,justifyContent:"center"}} source={{uri:itemimage}} />
            </View> 
            <View style={{flex:40,margin:10,backgroundColor:"white",padding:5}}>
            <Text style={{color:'blue',fontSize:25,padding:5}}>Rs: {itemprice}</Text>
            <Seperator/>
            <Text style={{color:'black',fontSize:20,fontWeight:"bold"}}>{item}</Text>
            <Seperator/>
            <View style={{padding:5}}>
            <Text style={{color:'black',fontSize:15,fontWeight:"bold"}}>City:  {city}</Text>
            </View>
           
            <Seperator/>
            <View style={{flexDirection:"row",padding:5}}>
                <View style={{flex:30}}>
                    <Text style={{color:'black',fontSize:15,fontWeight:"600"}}>Description:</Text>
                </View>
                <View style={{flex:70}}>
                <Text style={{color:'black',fontSize:15}}>{body}</Text>
                </View>
            </View>
            </View>
            <View style={{flex:10,flexDirection:"row",backgroundColor:"white",padding:20,marginLeft:15}}>
                <View style={{flex:50}}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('chat')}

                >
                  <LinearGradient
                    
                    colors={[ '#996515','#edc07b']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'black'
                    }]}>Chat</Text>
                </LinearGradient>
                   
                    
                </TouchableOpacity>
                </View>
                <View style={{flex:50}}>
                <TouchableOpacity
                    style={styles.signIn}
onPress={() => navigation.navigate('myshop')}
                >
                  <LinearGradient
                    
                    colors={[ '#996515','#edc07b']}
                    style={styles.signIn}
                    
                >
                    <Text style={[styles.textSign, {
                        color:'black'
                    }]}>Buy Now</Text>
                </LinearGradient>
                   
                    
                </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
      flex: 1,
    } ,
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    Seperator:{
        marginVertical:6,
        borderBottomColor:"#F2F3F4",
        borderBottomWidth:5
    },
    loginBtn: {
        width: "90%",
        borderRadius: 6,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#006400",
      },
});
