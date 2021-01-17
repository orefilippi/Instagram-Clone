import React from 'react'
import {useState, useEffect} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, PermissionsAndroid} from 'react-native'
import Modal from 'react-native-modal'
import Post from '../../screens/Post'



function PostButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (

        <View style={styles.postButton}>

            <TouchableOpacity style={styles.buttonI} onPress={toggleModal} >
                <Text style={styles.buttonII}>Post</Text>
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
                        
                  <Post></Post>
 
            </Modal>





        </View>


    );
}

const styles = StyleSheet.create({

    buttonI:{ 
        borderWidth: 1.5,
        borderRadius: 4,
        padding: 0.5,
        backgroundColor:'#e8e8e8',
        borderColor:'white',                                                                                                                                                                                                                                            
    },

    buttonII:{
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


    postButton:{
        
        position:'absolute',
        bottom:'16%'

    }


});


export default PostButton;