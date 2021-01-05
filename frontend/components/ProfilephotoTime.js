import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilephotoTime(props) {
    return (
        <View style={styles.time}>
            <Text onPress={()=>console.log("tapped")}>hours</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    time:{
        position:"absolute",
        bottom:20,
        left:122
    }
})


export default ProfilephotoTime;