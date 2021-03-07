import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Connections(props) {

    const Network = () => {console.log('tapped')}


    return (
        <View style={styles.follow}>
            <Text style={styles.networkText} onPress={Network}>Network</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    follow:{ 

        flex:1,
        flexDirection:'row',

        top:-10,
        left:140,

        width: 140,
        height: 30,

        alignItems:'center',
        justifyContent:'center',

        borderWidth: 0.3,
        borderRadius: 5,
        borderColor:'white',

        backgroundColor:'#EBE8EB',
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowOffset:{
            height:5,
            width:10
        },

        elevation:4                                                                                                                                                                                                                                           
    },

    networkText:{
        fontSize: 15,
        color:'black'                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    },

});


export default Connections;