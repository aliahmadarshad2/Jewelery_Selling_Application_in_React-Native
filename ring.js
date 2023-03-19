import {View, Text,StyleSheet,ScrollView ,Image,Button,TouchableOpacity,FlatList, SafeAreaView} from 'react-native'
import React, { useState, useEffect } from 'react';
import { ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import post from './post';
const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('C:/Users/noor/project/assets/w1.jpg'),
    postTime: '4 mins ago',
    title:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('C:/Users/noor/project/assets/w1.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('C:/Users/noor/project/assets/w1.jpg'),
    postTime: '2 hours ago',
    title:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  
];
export default function ring({navigation}) {

  
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('Rings')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const {
              userId,
              Title,
              postImg,
              City,
              Description,
              Price
              
            } = doc.data();
            list.push({
              id: doc.id,
              userId,
              Title,
              postImg, 
              Description,
              City,
              Price    
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  
   return (

       <View style={styles.container} >
         <SafeAreaView>
          <FlatList 
          data={posts}
          
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={({item}) => (
             <View > 
                <TouchableOpacity onPress={() => navigation.navigate('cong',{item:item.Title,itemimage:item.postImg,itemprice:item.Price,body:item.Description,city:item.City,id:item.id})}>
      <View style={{flex:50,backgroundColor:'#fff', height:220,width:170, elevation:10, margin:5,borderRadius:10}}>
      <Image source={{uri: item.postImg}} style={styles.tinyLogo}/>
          <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:10}}>{item.Title}</Text>
          <Text style={{fontWeight:'bold',color:'grey',marginLeft:10}}>{item.Description}</Text>
          <Text style={{fontWeight:'bold',color:'blue',fontSize:17,marginLeft:10}}>RS:{item.Price}</Text>
       </View>
     
           </TouchableOpacity>
            </View>
           

          )}/>
         <View >
     <TouchableOpacity style={{ height:60, width:60,marginTop:-90,marginLeft:'80%', borderRadius:100,backgroundColor:'#E69720'}} onPress={() => navigation.navigate('Post')}>
      <View >
        <Text style={{fontSize:40,marginLeft:20,fontWeight:'bold',color:'black'}}>+</Text>
                    </View>   
      </TouchableOpacity>
      </View>
      </SafeAreaView>
   </View>
   )
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
     tinyLogo: {
      marginLeft:30,
      width: 100,
      height:100,
 }
 });