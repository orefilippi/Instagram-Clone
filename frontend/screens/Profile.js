import React from 'react';
import {useState} from 'react';
import { StyleSheet,ImageBackground, View, Button, Screen, TouchableOpacity ,Text} from 'react-native';

import Username from '../components/profile/Username'
import Time from '../components/profile/Time';
import Description from '../components/profile/Description';
import Followers from '../components/profile/Followers';
import PostButton from '../components/profile/PostButton';

import PhotosButton from '../components/profile/PhotosButton'
import AddProfileButton from '../components/profile/AddProfileButton'
import OptionsButton from '../components/profile/OptionsButton'
import ProfilePhotos from './profileScreens/ProfilePhotos';
import ProfilePhotosButton from '../components/profile/ProfilePhotosButton';


function Profile({navigation}) {

    return (
        
        <View style={styles.container}>

            <ImageBackground
            style={styles.image}
            source={require('../assets/photo-1520262494112-9fe481d36ec3.jpeg')}>

            <Username/>
            <Time/>

            </ImageBackground>

            <Description></Description>

            <Followers></Followers>

            <PostButton></PostButton>

            <PhotosButton></PhotosButton>

            <AddProfileButton></AddProfileButton>

            <OptionsButton></OptionsButton>

            <ProfilePhotosButton></ProfilePhotosButton>
        
        </View>

        
        

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
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
        bottom:'35%',

    
    },

    button:{
        position:"absolute",
        bottom:'20%',
        left:'10%'
    }
    


});


export default Profile;