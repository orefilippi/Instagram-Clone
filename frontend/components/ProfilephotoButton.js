import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilephotoButton(props) {
    return (
        <View style={styles.button}>
            <Text>+</Text>
        </View>
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