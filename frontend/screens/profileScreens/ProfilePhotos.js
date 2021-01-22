import React from 'react'
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

function ProfilePhotos(props) {
  
    return (

        <View style={styles.container}>
            <ImageBackground
            style={styles.image}
            source={require('../../assets/photo-1520262494112-9fe481d36ec3.jpeg')}>

                <Entypo style={styles.redDot} name='dot-single' size={80} color='red'></Entypo>
                <Entypo style={styles.greenDot} name='dot-single' size={80} color='green'></Entypo>
                <Entypo style={styles.yellowDot} name='dot-single' size={80} color='yellow'></Entypo>
                <Entypo style={styles.orangeDot} name='dot-single' size={80} color='orange'></Entypo>
                <Entypo style={styles.lightblueDot} name='dot-single' size={80} color='lightblue'></Entypo>


                <Image
                    style={styles.profileImage}
                    source={require('../../assets/random-dice.jpg')}/>

                <Text style={styles.username}>username</Text>
                <Text style={styles.time}>time</Text>

            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        width:350,
        height:600,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
    },

    image: {
        flex:1,
    },

    profileImage:{
        width:40,
        height:50,
        borderRadius:5,
        top:'2%',
        left: '2%'
    },

    username:{
        position:'absolute',
        top:'1.5%',
        left:'15%'
    },

    time:{
        top:'88%',
        left:'90%'
    },

    redDot: {
        position:'absolute',
        top:'90.5%',
        right:'84%'
    },

    greenDot: {
        position:'absolute',
        top:'90.5%',
        right:'77%'
    },

    yellowDot: {
        position:'absolute',
        top:'90.5%',
        right:'70%'
    },

    orangeDot: {
        position:'absolute',
        top:'90.5%',
        right:'63%'
    },

    lightblueDot: {
        position:'absolute',
        top:'90.5%',
        right:'56%'
    }


    

    

});

export default ProfilePhotos;