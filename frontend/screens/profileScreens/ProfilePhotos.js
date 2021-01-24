import React from 'react'
import {useState} from 'react'
import {StyleSheet, View, Image, ImageBackground, Text, Animated} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

function ProfilePhotos(props) {

    const redValue = useState(new Animated.Value(0)) [0]

    function moveRedDot() {
        Animated.timing(redValue, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const greenValue = useState(new Animated.Value(0)) [0]

    function moveGreenDot() {
        Animated.timing(greenValue, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

  
    return (

        <View style={styles.container}>


            <Animated.View style={{marginRight:redValue}}>
                <Entypo onPress={moveRedDot} name='dot-single'  size={80} color='red'></Entypo>
            </Animated.View>

            <Animated.View style={{marginRight:greenValue}}>
                <Entypo onPress={moveGreenDot} name='dot-single' size={80} color='green'></Entypo>
            </Animated.View>

            {/* <Entypo name='dot-single' size={80} color='green'></Entypo>

            <Entypo name='dot-single' size={80} color='yellow'></Entypo>

            <Entypo name='dot-single' size={80} color='orange'></Entypo>
            <Entypo name='dot-single' size={80} color='lightblue'></Entypo> */}



        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:350,
        height:600,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
    },
 

});

export default ProfilePhotos;