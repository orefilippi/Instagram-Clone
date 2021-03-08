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
      width:200,
      height:400,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "#EBE8EB",
      borderWidth:3,
      borderRadius: 10,
      borderColor:'white',

      shadowColor:'black',
      shadowOpacity:0.4,
      shadowOffset:{
          height:5,
          width:10
      },

      elevation:4,
    },



});


export default Options;