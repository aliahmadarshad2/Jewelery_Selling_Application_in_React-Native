import React, { useState } from 'react';
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
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
const image = { uri: "https://wallpaperaccess.com/download/green-marble-728204" };
const signup = ({navigation}) => {
    
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}

    return (
      <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.text_header}>ℝ𝕖𝕘𝕚𝕤𝕥𝕖𝕣 ℕ𝕠𝕨 !</Text>
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
                    onChangeText={(val) => setEmail(val)}
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
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setPassword(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) =>setPassword(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then((userCredentials) => {
                          // var user = userCredentials.user;
                          console.log('User signed up!');
                          navigation.navigate('Home')
                        })
                        .catch(error => {
                          console.log(error.code);
                          console.error(error);
                        });
                    }}
                >
                  <LinearGradient
                    
                    colors={[ '#996515','#edc07b']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'black'
                    }]}>Sign Up</Text>
                </LinearGradient>
                   
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#E69720',
                        borderWidth: 2,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#E69720'
                    }]}>Back To login</Text>
                </TouchableOpacity>
            </View>
    </View>
    </ScrollView>

          </Animatable.View> 
  
    
        </View>
        
    )
}
export default signup;
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
      fontSize: 30
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
