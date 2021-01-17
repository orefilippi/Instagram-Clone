import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import Photos from '../../screens/Photos'

function PhotosButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (

        <View style={styles.photosButton}>

            <TouchableOpacity style={styles.photosButtonI} onPress={toggleModal}>
                <Text style={styles.photosButtonII}>Photos</Text>
            </TouchableOpacity>



            <Modal  isVisible={isModalVisible}
                    onSwipeComplete={()=>{setModalVisible(false)}}
                    onBackdropPress={()=>{setModalVisible(false)}}
                    swipeDirection="down"

                    animationIn='pulse'
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

    photosButtonI:{
        borderWidth: 1.5,
        borderRadius: 4,
        padding: 0.5,
        backgroundColor:'#e8e8e8',
        borderColor:'white',  
    },

    photosButtonII:{
        borderWidth: 1.3,
        borderRadius: 4,
        padding: 4, 
        borderColor:'#991414',
        textAlign:'center',
        fontSize:16,
    },


    modalStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },


    photosButton:{
        
        position:'absolute',
        bottom:'10%'

    }


});


export default PhotosButton;