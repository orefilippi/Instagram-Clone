import React from 'react'
import {useState,useEffect} from 'react'
import { StyleSheet, View, Image, ImageBackground, Animated, StatusBar, FlatList, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel'

function Home(props) {

    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height
    
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
    
        {
          id: 5,
          image:{uri:"https://source.unsplash.com/collection/190328/1600x900"}
        },
        {
          id: 6,
          image:{uri:"https://source.unsplash.com/collection/190329/1600x900"}
        },
        {
          id: 7,
          image:{uri:"https://source.unsplash.com/collection/190330/1600x900"}
        },
        {
          id: 8,
          image:{uri:"https://source.unsplash.com/collection/190321/1600x900"}
        },
    
        {
          id: 9,
          image:{uri:"https://source.unsplash.com/collection/190320/1600x900"}
        },
        {
          id: 10,
          image:{uri:"https://source.unsplash.com/collection/190315/1600x900"}
        },
        {
          id: 11,
          image:{uri:"https://source.unsplash.com/collection/190313/1600x900"}
        },
        {
          id: 12,
          image:{uri:"https://source.unsplash.com/collection/190728/1600x900"}
        }
    ];

    // const imagesUrl = 'http://192.168.0.26:8000/api/posts/1'
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //   fetch(imagesUrl)
    //     .then((response) => response.json())
    //     .then((json) => setImages(json))
    //     .catch((error) => console.error(error))
    // }, []);
  

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingLeft:0, paddingRight:0, padding:50, backgroundColor: '#fdfff5' }}>
            <StatusBar hidden />
            <Carousel 

                data = {images}
                vertical

                sliderHeight={400}
                itemHeight={1200}

                renderItem = {( {item} )  => { 

                    return <ImageBackground 
                                source={item.image}
                                style = {{ 
                                    width:400,
                                    height:500,
                                }}

                                imageStyle={{ resizeMode:'cover', 
                                            borderRadius:10,  
                                        }}
                            
                                
                            />
                }}
            
            />
            
        </View>

    )

}
export default Home;