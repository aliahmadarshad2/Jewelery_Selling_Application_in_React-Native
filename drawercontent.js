import React from 'react';
import { View, StyleSheet } from 'react-native';
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
import { mdiCogBox } from '@mdi/js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

export function DrawerContent(props) {
  
    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/project-98f54.appspot.com/o/ali.jpg?alt=media&token=25eaccae-6e88-4ddb-8140-316656a9b7a6' }}
                                size={110}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
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

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.goBack()}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="inbox" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inbox"
                            onPress={() => {props.navigation.navigate('inbox')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={''}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
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
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
        },
        row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
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