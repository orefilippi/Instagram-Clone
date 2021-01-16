import React from 'react';
import {StyleSheet, FlatList, SafeAreaView,Image, TouchableWithoutFeedback} from 'react-native'



const images = [
    {
      id: '1',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '2',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '3',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '4',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '5',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '6',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '7',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '8',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '9',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '10',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '11',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '12',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '13',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '14',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '15',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '16',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '17',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '18',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '19',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '20',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '21',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '22',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '23',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '24',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '25',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '26',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '27',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '28',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '29',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '30',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '31',
      image:{uri:"https://picsum.photos/200"}
    },
    {
      id: '32',
      image:{uri:"https://picsum.photos/200"}
    },

];
  
function Photos(props) {


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