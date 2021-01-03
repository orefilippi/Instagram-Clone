import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Button, ImageBackground, View } from 'react-native';
import ProfilephotoButton from './components/ProfilephotoButton';
import ProfilephotoUsername from './components/ProfilephotoUsername';
import ProfilephotoTime from './components/ProfilephotoTime';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri:"https://picsum.photos/seed/picsum/200/300"}}>
          <ProfilephotoButton/>
          <ProfilephotoUsername/>
          <ProfilephotoTime/>
      </ImageBackground>

      {/* <View>
        <Text>Description</Text>        
      </View>

      <View>
        <Text>Photos|Videos</Text>        
      </View>

      <View>
        <Text>Followers|Following</Text>        
      </View>
      
      <Button title="post"></Button> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: "center",

  },


  image:{
    width:300, 
    height:400,
    overflow: 'hidden',
    borderRadius:10
  },



});