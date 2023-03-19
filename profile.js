import React from 'react';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { View,  Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function profile({navigation}) {
    return (
        <View style={styles.container}>
        <View style={styles.userInfoSection}>
                        <View style={{marginTop: 15,marginLeft:"2%"}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/project-98f54.appspot.com/o/ali.jpg?alt=media&token=25eaccae-6e88-4ddb-8140-316656a9b7a6'
                                }}
                                size={300}
                            />
                            <View style={{marginLeft:"30%", flexDirection:'column'}}>
                                <Title style={styles.title}>Ali Ahmad</Title>
                                <Caption style={styles.caption}>alich12@gmail.com</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

        <TouchableOpacity style={{marginTop:260,borderColor:'#E69720',width:150,height:50,marginLeft:"28%",borderWidth:2, borderRadius: 10}} onPress={() => navigation.goBack()}>
            <Text style={{marginLeft:"18%",marginTop:10,color:'#E69720',fontSize:15,fontWeight:'bold'}}>Back to Home</Text>
        </TouchableOpacity>
         
         
      </View>
  );
           
}
 
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      height:200,
      backgroundColor:'#E69720',
      marginTop:'-2%'
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:'black'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:"-10%"
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:"20%",
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });