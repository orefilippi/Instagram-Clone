import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Time(props) {
    return (
        <View >
            <Text onPress={()=>console.log("tapped")}>hours</Text>
        </View>
    );
}


export default Time;