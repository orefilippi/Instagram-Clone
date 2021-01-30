import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions, Platform, PixelRatio} from 'react-native'

function Global(props) {

    return (

        <View style={{flex:1, flexDirection:'row', position:'relative',left:'9.5%',top:'-7%'}}>
            <View style={styles.trendOne}>
                <TouchableOpacity>
                    <Text style={styles.trendOneText}>TrendOne</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.trendTwo}>
                <TouchableOpacity>
                        <Text style={styles.trendTwoText}>TrendTwo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.trendThree}>
                <TouchableOpacity>
                        <Text style={styles.trendThreeText}>TrendThree</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.trendFour}>
                <TouchableOpacity>
                        <Text style={styles.trendFourText}>TrendFour</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.trendFive}>
                <TouchableOpacity>
                        <Text style={styles.trendFiveText}>TrendFive</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.trendSix}>
                <TouchableOpacity>
                        <Text style={styles.trendSixText}>TrendSix</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({

    trendOne:{ 
        position:'absolute',
        top: '47%',
        left:'-20%',

        width: 75,
        height: 26,

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

    trendTwo:{ 

        position:'absolute',
        top: '47%',
        left:'-40%',

        width: 75,
        height: 26,

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

    
    trendThree:{ 
        position:'absolute',
        top: '47%',
        left:'-60%',
        
        width: 75,
        height: 26,
        
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
    
    trendFour:{ 
        
        position:'absolute',
        top: '58.5%',
        left:'-20%',
        
        width: 75,
        height: 26,
        
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
    trendFive:{ 
        
        position:'absolute',
        top: '58.5%',
        left:'-40%',
        
        width: 75,
        height: 26,
        
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
    trendSix:{ 
        
        position:'absolute',
        top: '58.5%',
        left:'-60%',
        
        width: 75,
        height: 26,
        
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
    
    trendOneText:{
        fontSize: 15,
    },
    
    
    trendTwoText:{
        fontSize: 15,
    },

    trendThreeText:{
        fontSize: 15,
    },
    
    
    trendFourText:{
        fontSize: 15,
    },

    trendFiveText:{
        fontSize: 15,
    },

    trendSixText:{
        fontSize: 15,
    },
    
    
    
    
});


export default Global;