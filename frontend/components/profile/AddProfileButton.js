import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import AddProfile from '../../screens/profileScreens/AddProfile'
import AntDesign from 'react-native-vector-icons/AntDesign';


function AddProfileButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);


    return (

        <View style={styles.downArrow}  >

            <AntDesign name="down" 
                    size={30} 
                    color='white'
                    onPress={()=>{setModalVisible(true)}}>
            </AntDesign>


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

                <AddProfile></AddProfile>

            </Modal>




        </View>


    );
}

const styles = StyleSheet.create({


    modalStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },


    downArrow:{
        position:'absolute',
        top:'7%',
        left:'5%',
        
    },


});


export default AddProfileButton;