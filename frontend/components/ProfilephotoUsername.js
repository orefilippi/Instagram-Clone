import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilephotoUsername(props) {
    return (
        <View style={styles.usernamer}>
            <Text>username</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    usernamer:{

        //flex:1,
  
        padding:30,
        margin:80,
        left:10,
        top:200
        
        //top:100
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


export default ProfilephotoUsername;