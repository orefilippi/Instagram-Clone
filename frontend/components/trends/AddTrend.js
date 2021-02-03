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
                    size={10} 
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
        bottom:'55%',
    },

    trendsArrow:{
        position:'relative',
        bottom:'98%',
        left:'10.5%'
    },
    
    trendsText:{
        fontSize:14
    }
        


});


export default AddTrend;