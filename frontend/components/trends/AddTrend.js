import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign';

import SelectTrend from '../../screens/trendScreens/SelectTrend'


function AddTrend(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (

        <View>

            <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.trends}>
                <Text style={styles.trendsText}>Trends</Text>
            </TouchableOpacity>

            <AntDesign name="down" 
                    size={14} 
                    style={styles.trendsArrow}
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
                    >

                <SelectTrend></SelectTrend>

            </Modal>

        </View>


    );
}

const styles = StyleSheet.create({


    trends:{
        position:'relative',
        bottom:'50%',
        left:'10%'
    },

    trendsArrow:{
        position:'relative',
        bottom:'94.5%',
        left:'22.5%',
        color:'black'
    },
    
    trendsText:{
        fontSize:16,
        color:'black'
    }
        


});


export default AddTrend;