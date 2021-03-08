import React from 'react'
import { StyleSheet, View, ScrollView, Animated, TouchableOpacity, Text} from 'react-native';

import AddTrend from '../components/trends/AddTrend'
import AddCategory from '../components/trends/AddCategory'
import AddCountry from '../components/trends/AddCountry'

import Photos from '../screens/profileScreens/Photos'



function Trends(props) {

    const images = [
        {
          id: 1,
          image:{uri:"https://source.unsplash.com/collection/190327/1600x900"}
        },
        {
          id: 2,
          image:{uri:"https://source.unsplash.com/collection/190547/1600x900"}
        },
        {
          id: 3,
          image:{uri:"https://source.unsplash.com/collection/190527/1600x900"}
        },
        {
          id: 4,
          image:{uri:"https://source.unsplash.com/collection/190727/1600x900"}
        },
        
    ];


    return (

      <ScrollView style={{backgroundColor:'#fdfff5'}}>

        <View style={{top:20, left:150}}>

          <AddCountry></AddCountry>
          <AddTrend></AddTrend>
          <AddCategory></AddCategory>

        </View>

        
        <View style={{top:-10}}>
            <Photos></Photos>
        </View>


      </ScrollView>



    );
}

const styles = StyleSheet.create({
    


});


export default Trends;