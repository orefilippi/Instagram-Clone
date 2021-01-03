import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilephotoTime(props) {
    return (
        <View style={styles.time}>
            <Text>hours</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    time:{

        padding:30,
        margin:80,
        bottom:15,
        left:24
            //margin:100
        //justifyContent:"center",
        // alignItems:"center",

        // backgroundColor: "crimson",
        // borderWidth:3,
        // borderColor:"chocolate",
        // borderRadius:10,  
        // margin:5    
    }
})


export default ProfilephotoTime;