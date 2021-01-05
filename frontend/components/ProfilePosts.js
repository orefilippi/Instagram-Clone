import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfilePosts(props) {
    return (
        <View style={styles.posts}>
            <Text>Photos|Videos|Date</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    posts:{
        position:'absolute',
        bottom: '27%'                                                                                                                                                                                                                                            
    }

});


export default ProfilePosts;