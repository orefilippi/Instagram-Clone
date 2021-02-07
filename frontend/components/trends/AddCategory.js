import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import AddProfile from '../../screens/profileScreens/AddProfile'
import AntDesign from 'react-native-vector-icons/AntDesign';

import SelectCategory from '../../screens/trendScreens/SelectCategory'
import { color } from 'react-native-reanimated';


function AddCategory(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (

        <View>

            <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.category}>
                <Text style={styles.categoryText}>Category</Text>
            </TouchableOpacity>

            <AntDesign name="down" 
                    size={10} 
                    style={styles.categoryArrow}
                    color='black'
                    onPress={()=>{setModalVisible(true)}}>
            </AntDesign>

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

                <SelectCategory></SelectCategory>
                
            </Modal>

        </View>


    );
}

const styles = StyleSheet.create({


    category:{
        position:'relative',
        bottom:'152.5%',
        left:'18%'
    },

    categoryArrow:{
        position:'relative',
        bottom:'193%',
        left:'31.5%',
        color:'white'
    },
    
    categoryText:{
        fontSize:14,
        color:'white'
    }
        
});

export default AddCategory;