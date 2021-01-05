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
        position:"absolute",
        overflow:'hidden',
        bottom:40,
        left:108,
        display:'none',
        display:'flex'
      }
})


export default ProfilephotoUsername;