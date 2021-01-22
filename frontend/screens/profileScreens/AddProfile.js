import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


function AddProfile(props) {
  
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
      width:350,
      height:200,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 10,
    },



});


export default AddProfile;