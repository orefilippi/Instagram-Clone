import React from 'react'
import {useState, useEffect} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, PermissionsAndroid} from 'react-native'
import Modal from 'react-native-modal'
import TrendsAnimations from '../../screens/profileScreens/TrendsAnimations'



function TrendsAnimationsButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (

        <View style={styles.postButton}>

            <TouchableOpacity style={styles.buttonI} onPress={toggleModal} >
                <Text style={styles.postButtonText}>Trends Animations</Text>
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
                        
                  <TrendsAnimations></TrendsAnimations>
 
            </Modal>

        </View>


    );
}

const styles = StyleSheet.create({
    
    postButton:{
        
        width: 150,
        height: 26,
        alignItems:'center',
        justifyContent:'center',

        top:-23,
        left:220,

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


    postButtonText:{
        fontSize: 15,
        color:'black',                                                                                                                                                                                                                
    },

    modalStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }




});


export default TrendsAnimationsButton;