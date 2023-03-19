import React from 'react'
import { View, Text, TouchableOpacity,TouchableRipple ,Ionicons, _ScrollView} from 'react-native'
import { StatusBar } from 'react-native';
import { createDrawerNavigator , DrawerContentScrollView,
  DrawerItem} from '@react-navigation/drawer';
import dashboard from './dashboard';
import TabNavigation from './TabNavigation';
import inbox from './inbox';
import myshop from './myshop';
import { DrawerContent } from './drawercontent';
import profile from './profile';

const Drawer = createDrawerNavigator();



export default function drawer({navigation}) {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        
            <Drawer.Screen name="Dash" component={TabNavigation} options={{
          drawerInactiveBackgroundColor:"#23B08B",
          drawerLabel: 'DashBoard',
          
          
          drawerStyle:{
            backgroundColor:'#fff',alignContent:'center'},
              title: 'ℍ𝕆𝕄𝔼',
              headerStyle: {
                backgroundColor: '#E69720',
                height:60
                
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:30,
                
              },
            
              
            }}/>
            
        <Drawer.Screen name="profile" component={profile}
        />
        <Drawer.Screen name="inbox" component={inbox} />
        
      </Drawer.Navigator>
    )
}
