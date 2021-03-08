import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import Options from '../../screens/profileScreens/Options'
import Entypo from 'react-native-vector-icons/Entypo'

function OptionsButton(props) {

    const [isModalVisible, setModalVisible] = useState(false)


    return (

        <View style={styles.options}  >

                <Entypo name="documents" 
                    size={30} 
                    color='black'
                    onPress={()=>{setModalVisible(true)}}>
                </Entypo>


            <Modal  isVisible={isModalVisible}
                    onSwipeComplete={()=>{setModalVisible(false)}}
                    onBackdropPress={()=>{setModalVisible(false)}}
                    swipeDirection="down"

                    backdropColor='black'


                    backdropOpacity={0.2}

                    animationIn= 'flipInX'
                    animationInTiming={700}

                    animationOut='flipOutX'
                    animationOutTiming={700}

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
        top:-50,
        left:90
    },

    options:{
        top:-10,
        left:360
    },


});


export default OptionsButton;