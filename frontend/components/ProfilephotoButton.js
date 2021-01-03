import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function ProfilephotoButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={()=> console.log("tapped")}>
            <Text>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button:{
        width:25,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "crimson",
        borderWidth:3,
        borderColor:"chocolate",
        borderRadius:10,  
        margin:5,
        left:265
    }
})


export default ProfilephotoButton;