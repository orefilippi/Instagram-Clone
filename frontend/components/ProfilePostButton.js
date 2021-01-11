import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

function ProfilePostButton(props) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Post</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button:{
        position:'absolute',
        bottom: '18%'                                                                                                                                                                                                                                            
    }

});


export default ProfilePostButton;