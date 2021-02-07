import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import Photos from '../../screens/profileScreens/Photos'
import ProfilePhotos from '../../screens/profileScreens/ProfilePhotos';

function ProfilePhotosButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (

        <View style={styles.profilePhotosButton}>

            <TouchableOpacity  onPress={toggleModal}>
                <Text style={styles.profilePhotosText}>Profile Photos</Text>
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

    profilePhotosButton:{

        position:'absolute',
        bottom: '10%',

        width: 100,
        height: 28,

        alignItems:'center',
        justifyContent:'center',

        borderWidth: 0.3,
        borderRadius: 5,
        borderColor:'white',

        backgroundColor:'#1f291b',
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowOffset:{
            height:5,
            width:10
        },

        elevation:4,

    },

    profilePhotosText:{
        fontSize: 15,
        color:'white'
    },


    modalStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },




});


export default ProfilePhotosButton;