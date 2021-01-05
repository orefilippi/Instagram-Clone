import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function ProfileFollowers(props) {
    return (
        <View style={styles.photos_videos}>
            <Text>Followers|Following</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    photos_videos:{
        position:'absolute',
        bottom: '24%'                                                                                                                                                                                                                                            
    }

});


export default ProfileFollowers;