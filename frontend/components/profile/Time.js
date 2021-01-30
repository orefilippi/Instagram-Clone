import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Time(props) {
    return (
        <View style={styles.time}>
            <Text onPress={()=>console.log("tapped")}>hours</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    time:{
        position:'absolute',
        bottom:'5%'
    }


});


export default Time;