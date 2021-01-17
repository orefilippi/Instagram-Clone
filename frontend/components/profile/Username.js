import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


function Username(props) {
    return (
        <View>      
            <Text onPress={()=>console.log("tapped")}>username</Text>
        </View>
    );
}


export default Username;