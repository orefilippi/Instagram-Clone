import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList, TouchableWithoutFeedback} from 'react-native'
import Modal from 'react-native-modal'


function AddCountry(props) {

    var country = 'Country'

    const countries = [
        {
          id: 1,
          country: 'United Kingdom'
        },
        {
          id: 2,
          country: 'Greece'
        },
        {
          id: 3,
          country: 'Albania'
        },
        {
          id: 4,
          country: 'United States'
        },
    
        {
          id: 5,
          country: 'France'
        }
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const [currentCountry, selectedCountry] = useState('Country');



    return (

        <View>

            <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.country}>
                <Text style={styles.countryText}>{currentCountry}</Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible}

                    onSwipeComplete={()=>{setModalVisible(false)}}
                    onBackdropPress={()=>{setModalVisible(false)}}

                    swipeDirection="down"

                    animationIn='fadeIn'
                    animationInTiming={200}

                    animationOut='fadeOut'
                    animationOutTiming={200}
                    

                    style={{position:'absolute',top:'10%', left:'6%'}}
                    >

                <View style={styles.container}>
                    <FlatList
                        data={countries}
                        numColumns={1}
                        keyExtractor={country => country.id.toString()}
                        renderItem={({item})=> (
                        <TouchableWithoutFeedback onPress={ ()=> {selectedCountry(item.country) 
                                                                    setModalVisible(false)}}>
                            <Text style={styles.text}> {item.country} </Text>
                        </TouchableWithoutFeedback>
                        )}
                    />
                </View>
                
            </Modal>

        </View>


    );
}

const styles = StyleSheet.create({


    country:{
        position:'relative',
        top:'20%',
        right:'25%'
    },

    countryText:{
        fontSize:35,
        color:'white'
    },
    
    container: {
        width:165,
        height:550,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#141402',
  
        padding:4,
  
        borderRadius: 10,
        borderWidth:1
      },
  
      text:{
          fontSize:20, 
          borderWidth:1,
          borderRadius:13,
          borderColor:'#665d17',
          padding:5,
          margin:2,
  
          backgroundColor: 'white',
          shadowColor:'black',
          shadowOpacity:0.4,
          shadowOffset:{
              height:5,
              width:10
          },
  
          elevation:8
  
          
      }
});


export default AddCountry;