import React from 'react';
import { 
    View, 
    Text, 
    Alert,
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import { ReactNativeFirebase } from '@react-native-firebase/app';





export default function login({navigation}) {
    return (
        <View style={styles.container}>
    
    <View style={styles.header}>
        <Text style={styles.text_header}>𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕃𝕌𝕏ℝ𝕀𝕆𝕌𝕊</Text>
        <Text style={{marginLeft:200, color: 'black',fontWeight: 'bold',fontSize: 20}}>🅢🅗🅞🅟🅢</Text>
    </View>
    <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "white"
            }]}
        >
          <ScrollView>
             <View style={styles.footer}>
    <Text style={styles.text_footer}>Username</Text>
    <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                >
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    
                    
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
        <Text style={{padding:10,color:"black"}}>Forgot Password?</Text>
      </TouchableOpacity>
      
            <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={()=> {
        auth()
        .signInWithEmailAndPassword('alich12@gmail.com', '123456')
        .then((userCredentials) => {
          // var user = userCredentials.user;
          console.log('User signed in!');
          navigation.navigate('Home')
        })
        .catch(error => {
          this.setState({visible:false});
          console.log(error.code);
          console.error(error);
        });}
        } >   
                  <LinearGradient
                    colors={[ '#996515','#edc07b']}
                    style={styles.signIn}>
                    <Text style={[styles.textSign, {
                        color:'black'
                    }]}>LOGIN</Text>
                </LinearGradient>   
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    style={[styles.signIn, {
                        borderColor: '#E69720',
                        borderWidth: 2,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#E69720'
                    }]}>SignUp</Text>
                </TouchableOpacity>
            </View>
    </View>
    </ScrollView>

          </Animatable.View> 
  
        
        
       
          
        </View>
       
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#E69720'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent:"center",
        
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
  

