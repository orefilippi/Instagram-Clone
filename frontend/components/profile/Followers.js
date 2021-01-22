import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function Followers(props) {

    const Followers = () => {console.log('tapped')}
    const Following = () => {console.log('tappeddd')}


    return (
        <View style={styles.followI}>
            <Text style={styles.followII} onPress={Followers}>followers</Text>
            <Text style={styles.followIII} onPress={Following}>following</Text>
        </View>



    );
}

const styles = StyleSheet.create({

    followI:{ 
        position:'absolute',
        bottom: '21%',
        borderWidth: 1.5,
        borderRadius: 4,
        padding: 0.5,
        backgroundColor:'#e8e8e8',
        borderColor:'white',                                                                                                                                                                                                                                            
    },

    followII:{
        borderWidth: 1.3,
        borderRadius: 4,
        padding: 4, 
        borderColor:'#991414',
        textAlign:'center',
        fontSize:16,                                                                                                                                                                                                                                            
    },

    followIII:{

        borderWidth: 1.3,
        borderRadius: 4,
        padding: 4, 
        borderColor:'#991414',
        textAlign:'center',
        fontSize:16,
    }

});


export default Followers;