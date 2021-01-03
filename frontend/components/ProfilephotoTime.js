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

        padding:30,
        margin:80,
        bottom:15,
        left:24
    }
})


export default ProfilephotoTime;