import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilephotoUsername(props) {
    return (
        <View style={styles.usernamer}>
            <Text onPress={()=>console.log("tapped")}>username</Text>
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
    }
})


export default ProfilephotoUsername;