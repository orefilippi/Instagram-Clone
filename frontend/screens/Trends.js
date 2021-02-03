import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AddTrend from '../components/trends/AddTrend'
import AddCategory from '../components/trends/AddCategory'
import AddCountry from '../components/trends/AddCountry'

import Photos from '../screens/profileScreens/Photos'

function Trends(props) {

    return (
        
        <View style={styles.container}>
            
            <AddCountry></AddCountry>

            <AddTrend></AddTrend>

            <AddCategory></AddCategory>

            <Photos></Photos>

        </View>



    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },


});


export default Trends;