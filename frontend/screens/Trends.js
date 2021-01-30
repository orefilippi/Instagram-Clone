import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Country from '../components/trends/Country'
import Global from '../components/trends/Global'
import Category from '../components/trends/Category'

function Trends(props) {

    return (
        
        <View style={styles.container}>
            <Text style={styles.country}>Country</Text>
            <AntDesign name="down" 
                    size={25} 
                    style={styles.countryArrow}
                    color='black'
                    onPress={()=>{setModalVisible(true)}}>
            </AntDesign>

            <Country></Country>

            <Text style={styles.global}>Global</Text>
            <AntDesign name="down" 
                    size={25} 
                    style={styles.globalArrow}
                    color='black'
                    onPress={()=>{setModalVisible(true)}}>
            </AntDesign>

            <Global></Global>

            <Text style={styles.category}>Category</Text>
            <AntDesign name="down" 
                    size={25} 
                    style={styles.categoryArrow}
                    color='black'
                    onPress={()=>{setModalVisible(true)}}>
            </AntDesign>

            <Category></Category>
        </View>



    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },

    country:{
        position:'absolute',
        top:'10%',
        left:'10%',
        fontSize:30
    },
    
    countryArrow:{
        position:'absolute',
        top:'11.2%',
        left:'37%'
    },

    global:{
        position:'absolute',
        top:'40%',
        left:'10%',
        fontSize:30

    },

    globalArrow:{
        position:'absolute',
        top:'41%',
        left:'33%'
    },

    category:{
        position:'absolute',
        top:'70%',
        left:'10%',
        fontSize:30
    },
    
    categoryArrow:{
        
        position:'absolute',
        top:'71.2%',
        left:'40%'
    },



});


export default Trends;