import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


function Options(props) {
  
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
      height:400,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 10,
    },



});


export default Options;