import React from 'react';
import { StyleSheet, Text, ImageBackground, View, Dimensions, Image, FlatList, TouchableWithoutFeedback, ScrollView} from 'react-native';

import Username from '../components/profile/Username'
import Time from '../components/profile/Time';
import Description from '../components/profile/Description';
import Connections from '../components/profile/Connections';
import PostButton from '../components/profile/PostButton';

import PhotosButton from '../components/profile/PhotosButton'
import AddProfileButton from '../components/profile/AddProfileButton'
import OptionsButton from '../components/profile/OptionsButton'
import ProfilePhotosButton from '../components/profile/ProfilePhotosButton';
import TrendsAnimationsButton from '../components/profile/TrendsAnimationsButton'


import Photos from '../screens/profileScreens/Photos'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


function Profile() {

    return (
        
        <ScrollView style={{backgroundColor:'#fdfff5'}}>

            <View>
                <AddProfileButton></AddProfileButton>
                <OptionsButton></OptionsButton>
            </View>

            <View style={{top:40, left:62}}>  
                <ImageBackground
                    style={styles.image}
                    source={require('../assets/photo-1520262494112-9fe481d36ec3.jpeg')}>
                    <Username/>
                    <Time/>
                </ImageBackground>
            </View>

            <View style={{top:100}}>
                <Connections></Connections>
                <PostButton></PostButton>
                <ProfilePhotosButton></ProfilePhotosButton>
                <TrendsAnimationsButton></TrendsAnimationsButton>
            </View>

            <View style={{height:800, top:160}}>
                <Photos></Photos>
            </View>

        </ScrollView>


    );
}

const styles = StyleSheet.create({
    
    image:{
        width: width * 0.7, 
        height: height * 0.5,

        top:10,
    
        alignItems:'center',
        justifyContent:'flex-end',
    
        overflow: 'hidden',

        borderWidth: 3,
        borderRadius: 20,
        borderColor:'white',

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