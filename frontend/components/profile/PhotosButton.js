import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions, Platform, PixelRatio} from 'react-native'
import Modal from 'react-native-modal'
import Photos from '../../screens/profileScreens/Photos'


function PhotosButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (

        <View style={styles.photosButton}>

            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.PhotosButtonText}>Photos</Text>
            </TouchableOpacity>



            <Modal  isVisible={isModalVisible}
                    onSwipeComplete={()=>{setModalVisible(false)}}
                    onBackdropPress={()=>{setModalVisible(false)}}
                    swipeDirection="down"

                    animationIn='fadeIn'
                    animationInTiming={500}

                    animationOut='fadeOut'
                    animationOutTiming={500}

                    style={styles.modalStyle}
                    >

                <Photos></Photos>

            </Modal>




        </View>


    );
}

const styles = StyleSheet.create({

    photosButton:{ 
        position:'absolute',
        bottom: '15%',
        left: '31%',

        width: 70,
        height: 26,

        alignItems:'center',
        justifyContent:'center',

        borderWidth: 0.3,
        borderRadius: 5,
        borderColor:'white',

        backgroundColor:'#EBE8EB',
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowOffset:{
            height:5,
            width:10
        },

        elevation:4

    },

    PhotosButtonText:{
        fontSize: 15,
        color:'black'
    },


    modalStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }




});


export default PhotosButton;