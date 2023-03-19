import React ,{ useEffect } from "react";
import { ImageBackground,Image, StyleSheet, Text, View, TextInput , TouchableOpacity} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./StackNav";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
 
  return(
    
    <NavigationContainer>
             <MyStack />
    </NavigationContainer>
  )
}
  

export default App;