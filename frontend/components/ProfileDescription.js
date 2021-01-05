import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfileDescription(props) {
    return (
        <View style={styles.description}>
            <Text>Description</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    description:{
        position:'absolute',
        bottom: '30%'
    }

});


export default ProfileDescription;


