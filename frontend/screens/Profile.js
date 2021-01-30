import React from 'react';
import { StyleSheet,ImageBackground, View, Dimensions, Image} from 'react-native';

import Username from '../components/profile/Username'
import Time from '../components/profile/Time';
import Description from '../components/profile/Description';
import Followers from '../components/profile/Followers';
import PostButton from '../components/profile/PostButton';

import PhotosButton from '../components/profile/PhotosButton'
import AddProfileButton from '../components/profile/AddProfileButton'
import OptionsButton from '../components/profile/OptionsButton'
import ProfilePhotosButton from '../components/profile/ProfilePhotosButton';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


function Profile() {

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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white'
        
    },
    
    
    image:{

        width: width * 0.7, 
        height: height * 0.5,
    
        alignItems:'center',
        justifyContent:'flex-end',
    
        overflow: 'hidden',
        position:'absolute',
        bottom: height / 3,

        borderWidth: 0.5,
        borderRadius: 20,
        borderColor:'#665d17',

        backgroundColor: 'white',
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowOffset:{
            height:5,
            width:10
        },

        elevation:8
    }
    


});


export default Profile;