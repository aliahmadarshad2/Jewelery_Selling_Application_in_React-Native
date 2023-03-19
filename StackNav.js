import React from 'react'
import { View, Text } from 'react-native'
import dashboardScreen from './dashboard'
import loginScreen from './login';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import drawer from './drawer';
import post from './post';
import cong from './cong';
import cong2 from './cong2';
import signup from './signup'
import chat from './chat';
import myshop from './myshop';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Login" component={loginScreen} options={{
          headerShown:false,
      }
      }/>
        <Stack.Screen   name="SignUp" component={signup} options={{
          headerShown:false,
      }
      }/>
      <Stack.Screen name="Home" component={drawer} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="Post" component={post}
      options={{headerShown:false}} />
      <Stack.Screen name="cong2" component={cong2} />
      <Stack.Screen name="cong" component={cong}options={{headerShown:false}} />
      <Stack.Screen name="myshop" component={myshop} />
      <Stack.Screen name="chat" component={chat} />
    </Stack.Navigator>
  );
}

export default MyStack