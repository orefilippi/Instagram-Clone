import React from 'react'
import {useState} from 'react'
import { StyleSheet, View, Image, ImageBackground, Animated} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Carousel from 'react-native-snap-carousel'



function Home(props) {


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
        }
    ];


    return (

        
        <View style={styles.container}>

            <Carousel 
                data={images}
                
                vertical
                sliderHeight={800}
                itemHeight={1300}

                renderItem={( {item } ) => {

                    return <View style={{borderRadius:20,shadowOffset:{width:0,height:5}, shadowOpacity:1, shadowRadius:20, elevation:20}}>
                                <ImageBackground
                                    source={item.image}
                                    style={{
                                        width:393,
                                        height:500,
                                    }}
                                    
                                    imageStyle={{borderRadius:10,  resizeMode:'cover'}}
                                    
                                    >

                                        <Entypo style={styles.redDot} name='dot-single' size={80} color='red'></Entypo>

                                        <Entypo style={styles.greenDot}  name='dot-single' size={80} color='lawngreen'></Entypo>

                                        <Entypo style={styles.yellowDot} name='dot-single' size={80} color='yellow'></Entypo>

                                        <Entypo style={styles.orangeDot} name='dot-single' size={80} color='orange'></Entypo>

                                        <Entypo style={styles.lightblueDot} name='dot-single' size={80} color='navajowhite'></Entypo>


                                        <Image
                                            style={styles.profileImage}
                                            source={require('../assets/photo-1520262494112-9fe481d36ec3.jpeg')}/>


                                    </ImageBackground>

                            </View>
                
                }}

                
                
            />

            
        

        </View>

    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignSelf:'center',
        alignContent:'center',
        paddingTop:100,
        backgroundColor:'white'
    },

    profileImage:{
        width:40,
        height:50,
        borderRadius:5,
        top:'2%',
        left: '2%'
    },

    redDot: {
        position:'absolute',
        top:'89%',
        right:'86%'
    },

    greenDot: {
        position:'absolute',
        top:'89%',
        right:'79%',

    },

    yellowDot: {
        position:'absolute',
        top:'89%',
        right:'72%'
    },

    orangeDot: {
        position:'absolute',
        top:'89%',
        right:'65%'
    },

    lightblueDot: {
        position:'absolute',
        top:'89%',
        right:'58%'
    }

});


export default Home;