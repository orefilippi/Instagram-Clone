import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import Options from '../../screens/Options'
import Entypo from 'react-native-vector-icons/Entypo';

function OptionsButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);


    return (

        <View style={styles.options}  >

                <Entypo name="documents" 
                    size={30} 
                    onPress={()=>{setModalVisible(true)}}>
                </Entypo>


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

                <Options></Options>

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


    
    options:{
        position:'absolute',
        top:'7%',
        right:'5%'
    
    },


});


export default OptionsButton;