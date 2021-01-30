import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


function Username(props) {
    return (
        <View style={styles.username}>      
            <Text onPress={()=>console.log("tapped")}>username</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    username:{
        position:'absolute',
        bottom:'1%'
    }


});

export default Username;