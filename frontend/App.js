import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, ImageBackground, View } from 'react-native';

import ProfilephotoUsername from './components/ProfilephotoUsername';
import ProfilephotoTime from './components/ProfilephotoTime';
import ProfileDescription from './components/ProfileDescription';
import ProfilePosts from './components/ProfilePosts';
import ProfileFollowers from './components/ProfileFollowers';
import ProfilePostButton from './components/ProfilePostButton';




export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <ImageBackground
        style={styles.image}
        source={require('./assets/photo-1520262494112-9fe481d36ec3.jpeg')}>

        <ProfilephotoUsername/>
        <ProfilephotoTime/>

      </ImageBackground>


      <ProfileDescription></ProfileDescription>

      <ProfilePosts></ProfilePosts>

      <ProfileFollowers></ProfileFollowers>

      <ProfilePostButton></ProfilePostButton>


    </SafeAreaView>


    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent:'center'
  },


  image:{
    width:270, 
    height:400,


    alignItems:'center',
    justifyContent:'flex-end',


    overflow: 'hidden',
    borderRadius:20,
    position:'absolute',
    bottom:'35%'

  },

  icon:{
    justifyContent:'center'
  }


});