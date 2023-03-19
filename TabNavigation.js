import React from 'react'
import { View, Text } from 'react-native'
import dashboard from './dashboard';
import braclets from './braclets';
import ring from './ring';
import bangle from './bangle';
import watch from './watch';

import * as Animatable from 'react-native-animatable';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LinearGradient from 'react-native-linear-gradient';
const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
    return (
     
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: { fontSize: 12,color:'black' },
          tabBarItemStyle: { width: 90 },
          tabBarStyle: { backgroundColor: '#fff',fontSize:'bold' },
        }} >
        <Tab.Screen  name="Braclets" component={braclets} />
        <Tab.Screen name="Rings" component={ring} />
        <Tab.Screen name="Bangles" component={bangle} />
        <Tab.Screen name="Watches" component={watch} />
      </Tab.Navigator>
    )
}





