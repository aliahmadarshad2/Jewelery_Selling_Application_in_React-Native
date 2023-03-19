import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from 'C:/Users/noor/project/Messagestyle.js';

const Messages = [
  {
    id: '1',
    userName: 'Sir Akzar Nazir',
    userImg: require('C:/Users/noor/project/assets/si.jpeg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Walli',
    userImg: require('C:/Users/noor/project/assets/w.jpeg'),
    messageTime: '5 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: '3',
    userName: 'Osama',
    userImg: require('C:/Users/noor/project/assets/o.jpeg'),
    messageTime: '6 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },

  {
    id: '4',
    userName: 'Wahaj',
    userImg: require('C:/Users/noor/project/assets/wahaj.jpeg'),
    messageTime: '7 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Sheeza',
    userImg: require('C:/Users/noor/project/assets/s.jpeg'),
    messageTime: '8 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },


];

const inbox = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});