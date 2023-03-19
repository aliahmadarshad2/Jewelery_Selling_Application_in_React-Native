import React, {useState} from 'react'
import {View, Text,StyleSheet,ScrollView ,Image,TouchableOpacity,FlatList, SafeAreaView} from 'react-native'

export default function bracelet({navigation}) {
   const [reviews, setReviews] = useState([
      { src:require('C:/Users/noor/project/assets/br1.jpg'),title: "Pink Flower Bracelet",  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 250,city:"Lahore", key: '1' },
      { src:require('C:/Users/noor/project/assets/br2.jpg'),title: 'White Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 210,city:"Lahore", key: '2' },
      {src:require('C:/Users/noor/project/assets/br3.jpg'), title: 'Heart Shape Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500, city:"Lahore", key: '3' },
      { src:require('C:/Users/noor/project/assets/br4.jpg'),title: 'Fancy Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 250,city:"Lahore",  key: '4' },
      { src:require('C:/Users/noor/project/assets/br5.jpg'),title: 'Multi bean Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 210,city:"Lahore",  key: '5' },
      {src:require('C:/Users/noor/project/assets/br6.jpg'), title: 'Simple white thin Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500,city:"Lahore",  key: '6' },
      {src:require('C:/Users/noor/project/assets/br7.png'), title: 'Simple thin Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500, city:"Lahore", key: '7' },
      {src:require('C:/Users/noor/project/assets/br8.jpg'), title: 'Fancy Bracelet',  body: '100 % Gurantee of Quality Delivery Service is available contact us',price: 500,city:"Lahore",  key: '8' },
    ]);
   return (
       <View style={styles.container} >
          <SafeAreaView>
          <FlatList 
          data={reviews}
          
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={({item}) => (
             <View > 
                <TouchableOpacity onPress={() => navigation.navigate('cong2',{item:item.title,itemimage:item.src,itemprice:item.price,body:item.body,city:item.city,id:item.key})}>
                
      <View style={{flex:50,backgroundColor:'#fff', height:220,width:170, elevation:10, margin:5,borderRadius:10}}>
       <Image source={item.src} style={styles.tinyLogo}/>
          <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:10}}>{item.title}</Text>
          <Text style={{fontWeight:'bold',color:'grey',marginLeft:10}}>{item.body}</Text>
          <Text style={{fontWeight:'bold',color:'blue',fontSize:17,marginLeft:10}}>RS:{item.price}</Text>
       </View>
     
           </TouchableOpacity>
            </View>
           

          )}/>
       <View style={{flex:1}}>
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
     flex: 100
   },
     tinyLogo: {
        marginLeft:30,
   width: 100,
   height:100,
 }
 });