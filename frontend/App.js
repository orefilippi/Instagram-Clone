import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Button, ImageBackground, View } from 'react-native';
import ProfilephotoUsername from './components/ProfilephotoUsername';
import ProfilephotoTime from './components/ProfilephotoTime';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>


      <ImageBackground
        style={styles.image}
        source={require('./assets/photo-1520262494112-9fe481d36ec3.jpeg')}>

        <ProfilephotoUsername/>
        <ProfilephotoTime/>

      </ImageBackground>


      <View style={styles.description}>
        <Text>Description</Text>
        <Text>Photos|Videos</Text>
        <Text>Followers|Following</Text>
        <Button title="post"></Button>
      </View>



    </SafeAreaView>


    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',

  },


  image:{
    width:270, 
    height:400,
    overflow: 'hidden',
    borderRadius:20,
    position:"absolute",
    top:120
  },

  description:{
    position:"absolute",
    bottom:200
  }


});
