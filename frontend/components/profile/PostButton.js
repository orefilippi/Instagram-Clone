import React from 'react'
import {useState, useEffect} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, PermissionsAndroid} from 'react-native'
import Modal from 'react-native-modal'
import Post from '../../screens/profileScreens/Post'



function PostButton(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (

        <View style={styles.postButton}>

            <TouchableOpacity style={styles.buttonI} onPress={toggleModal} >
                <Text style={styles.postButtonText}>Post</Text>
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
    
    postButton:{
        
        width: 60,
        height: 26,
        alignItems:'center',
        justifyContent:'center',

        top:-4,
        left:180,

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


export default PostButton;