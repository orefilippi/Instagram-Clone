import React from 'react'
import { StyleSheet, View, Text} from 'react-native';



function Home(props) {

    return (
        
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});


export default Home;