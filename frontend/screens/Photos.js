import React from 'react'
import {StyleSheet, FlatList, SafeAreaView,Image, TouchableWithoutFeedback} from 'react-native'


function Photos(props) {
  
  const images = [
      {
        id: 1,
        image:{uri:"https://picsum.photos/200"}
      },
      {
        id: 2,
        image:{uri:"https://picsum.photos/200"}
      },
      {
        id: 3,
        image:{uri:"https://picsum.photos/200"}
      },
      {
        id: 4,
        image:{uri:"https://picsum.photos/200"}
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
      width:350,
      height:600,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 10,
    },

    imageStyle:{
      flex:1,
      width:80,
      height:80,
      margin:1,
    }



});


export default Photos;
