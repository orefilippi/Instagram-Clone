import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Followers(props) {

    const Followers = () => {console.log('tapped')}
    const Following = () => {console.log('tappeddd')}


    return (
        <View style={styles.follow}>
            <Text style={styles.followersText} onPress={Followers}>followers</Text>
            <Text style={styles.followingText} onPress={Following}> | following</Text>
        </View>



    );
}

const styles = StyleSheet.create({

    follow:{ 

        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom: '20%',

        width: 140,
        height: 30,

        alignItems:'center',
        justifyContent:'center',

        borderWidth: 0.3,
        borderRadius: 5,
        borderColor:'#a18f0a',

        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowOffset:{
            height:5,
            width:10
        },

        elevation:4                                                                                                                                                                                                                                           
    },

    followersText:{
        fontSize: 15,                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    },

    followingText:{
        fontSize: 15,                                                                                                                                                                                                                     
    }

});


export default Followers;