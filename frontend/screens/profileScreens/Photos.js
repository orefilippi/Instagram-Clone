import React from 'react'
import {StyleSheet, FlatList, SafeAreaView,Image, TouchableWithoutFeedback} from 'react-native'


function Photos(props) {
  
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


  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={images}
        numColumns={4}
        keyExtractor={image => image.id.toString()}
        renderItem={({item})=> (
          <TouchableWithoutFeedback onPress={()=>console.log("tapped")}>
            <Image source={item.image}
                  style={styles.imageStyle}></Image>
          </TouchableWithoutFeedback>
        )}
      />

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
      width:390,
      height:600,
      padding: 5,
      backgroundColor: "#141402",
      borderRadius: 10,
      borderWidth:1,
      borderColor:'white'
    },

    imageStyle:{
      flex:1,
      width:100,
      height:100,
      margin:1,
    }



});


export default Photos;
