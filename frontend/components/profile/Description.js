import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Description(props) {
    return (
        <View style={styles.description}>
            <Text>Description</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    description:{
        position:'absolute',
        bottom: '27%'
    }

});


export default Description;


