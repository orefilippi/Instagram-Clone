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
                    size={14} 
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
        bottom:'150%',
        left:'30%'
    },

    categoryArrow:{
        position:'relative',
        bottom:'193%',
        left:'46%',
        color:'black'
    },
    
    categoryText:{
        fontSize:16,
        color:'black'
    }
        
});

export default AddCategory;