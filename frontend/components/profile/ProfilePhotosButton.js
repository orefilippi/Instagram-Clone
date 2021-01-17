import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import Photos from '../../screens/Photos'
import ProfilePhotos from '../../screens/ProfilePhotos';

function ProfilePhotosButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (

        <View style={styles.photosButton}>

            <TouchableOpacity style={styles.profilePhotosButtonI} onPress={toggleModal}>
                <Text style={styles.profilePhotosButtonII}>Profile Photos</Text>
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

                <ProfilePhotos></ProfilePhotos>

            </Modal>




        </View>


    );
}

const styles = StyleSheet.create({

    profilePhotosButtonI:{
        borderWidth: 1.5,
        borderRadius: 4,
        padding: 0.5,
        backgroundColor:'#e8e8e8',
        borderColor:'white',  
    },

    profilePhotosButtonII:{
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
        bottom:'5%'

    }


});


export default ProfilePhotosButton;