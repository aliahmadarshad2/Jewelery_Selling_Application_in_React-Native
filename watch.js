import React, {useState} from 'react'
import {View, Text,StyleSheet,ScrollView ,Image,TouchableOpacity,FlatList} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
export default function watch({navigation}) {
   const [reviews, setReviews] = useState([
      { src:require('C:/Users/noor/project/assets/w1.jpg'),title: "Female Watch with Bangle",  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 250,city:"Lahore", key: '1' },
      { src:require('C:/Users/noor/project/assets/w2.jpg'),title: 'Beautiful Black watch with fancy bands',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 210,city:"Lahore", key: '2' },
      {src:require('C:/Users/noor/project/assets/w3.jpg'), title: 'Beautiful watch with White bands',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500, city:"Lahore", key: '3' },
      { src:require('C:/Users/noor/project/assets/w4.jpeg'),title: 'Fancy Watches',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 250,city:"Lahore",  key: '4' },
      { src:require('C:/Users/noor/project/assets/w5.jpg'),title: 'Fancy Watches',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 210,city:"Lahore",  key: '5' },
      {src:require('C:/Users/noor/project/assets/w6.jpg'), title: 'Black Watches',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500,city:"Lahore",  key: '6' },
      {src:require('C:/Users/noor/project/assets/w7.jpg'), title: 'Fancy Watches',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500, city:"Lahore", key: '7' },
      {src:require('C:/Users/noor/project/assets/w8.jpg'), title: 'Silver thin watch',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500,city:"Lahore",  key: '8' },
    ]);
   return (
       <View style={styles.container} >
          <FlatList 
          data={reviews}
          
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={({item}) => (
             <View > 
                <TouchableOpacity onPress={() => navigation.navigate('cong2',{item:item.title,itemimage:item.src,itemprice:item.price,body:item.body,city:item.city,id:item.key})}>
                
      <View style={{flex:50,backgroundColor:'#fff',height:220,width:170, elevation:10, margin:5,borderRadius:10}}>
       <Image source={item.src} style={styles.tinyLogo}/>
          <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:10}}>{item.title}</Text>
          <Text style={{fontWeight:'bold',color:'grey',marginLeft:10}}>{item.body}</Text>
          <Text style={{fontWeight:'bold',color:'blue',fontSize:17,marginLeft:10}}>RS:{item.price}</Text>
       </View>
     
           </TouchableOpacity>
            </View>
           

          )}/>
       <View style={{flex:1}}>
          <LinearGradient colors={['#01ab9d','#23B08B','#08d4c4']}>
     <TouchableOpacity style={{ height:60, width:60,marginTop:-90,marginLeft:'80%', borderRadius:100,backgroundColor:'#E69720'}} onPress={() => navigation.navigate('Post')}>
     
      <View >
        <Text style={{fontSize:40,marginLeft:20,fontWeight:'bold',color:'black'}}>+</Text>
                    </View>   
      </TouchableOpacity>
                    </LinearGradient>
      </View>
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