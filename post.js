



 
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from 'C:/Users/noor/project/addpost.js';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const post = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [title, setTitle] = useState(null);
  const [city,setCity]= useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: false,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Title: ', title);

    firestore()
    .collection('Rings')
    .add({
      Title: title,
      postImg: imageUrl,
      City:city,
      Description:description,
      Price:price,
    })
    .then(() => {
      console.log('Post Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setTitle(null);
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }

  const uploadImage = async () => {
    if( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      Alert.alert(
        'Image uploaded!',
        'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      );
      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <LinearGradient
                    
                    colors={[ '#E69720','#edc07b','#996515']}
                    
                >
                  
        {/* <View style={{flex:10}}>
        {image != null ? <AddImage source={{uri: image}} /> : null}
       </View> */}
                    
    <View style={{margin:20,borderRadius:30,borderColor:'black',borderEndColor:'#fff',borderWidth:3,backgroundColor:'#fff'}} >
    
      <View style={{flex:20,margin:20}}>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>Title:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter title"
          placeholderTextColor="grey"
          onChangeText={(val) => setTitle(val)}
        />
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
      </View>
      <View style={{flex:20,margin:20}}>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>Select Category</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="Select Category"
          placeholderTextColor="grey"
        />
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
</View>
      <View style={{flex:20,margin:20}}>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>City</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Select City"
          placeholderTextColor="grey"
          onChangeText={(val) => setCity(val)}
        />
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
</View>
      <View style={{flex:20,margin:20}}>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>Price:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Product Price"
          placeholderTextColor="grey"
          onChangeText={(val) => setPrice(val)}
        />
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
</View>
     
      <View style={{flex:20,margin:20 }}>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>Description:</Text>
        <TextInput
          style={{height:100}}
          onChangeText={(val) => setDescription(val)}
        />
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
      </View>
      <View style={{flex:20,margin:20}}>
      <View>
        <Text style={{color: 'black',
        fontSize: 16,fontWeight:'bold'}}>Select Image:</Text>
        </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => choosePhotoFromLibrary()}>  
        <Image
        style={styles.tinyLogo}
        source={require('C:/Users/noor/project/assets/camera.png')}
      />
        </TouchableOpacity>
        
    
</View>
{uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
    
    </View>
        
    </LinearGradient>
                   
        </ScrollView>
      
    </View>
  );
};

export default post;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#fff'
  },
  TextInput: {
    height: 50,
    width:300,
    height: 40,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  signIn: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
    
},
image: {
  flex: 1,
  justifyContent: "center"
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});