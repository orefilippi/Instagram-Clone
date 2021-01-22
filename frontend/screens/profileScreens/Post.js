import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


function Post(props) {
  
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
      height:600,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 10,
    },




});


export default Post;