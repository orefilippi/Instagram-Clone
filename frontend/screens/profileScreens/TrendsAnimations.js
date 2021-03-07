import React from 'react'
import {StyleSheet, View, Text, TouchableWithoutFeedback, Animated, Easing} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';



function TrendsAnimations(props) {

    const trendA = new Animated.Value(0)
    const trendB = new Animated.Value(0)
    const trendC = new Animated.Value(0)
    const trendD = new Animated.Value(0)
    const searchBar = new Animated.Value(0)

    
    const animateTrends = easing => {
        Animated.stagger(400,[
            
            Animated.timing(searchBar, {
                toValue: 1,
                duration:1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
            
            Animated.timing(trendA, {
                toValue: 1,
                duration:1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
            Animated.timing(trendC, {
                toValue: 1,
                duration:1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
            
            Animated.timing(trendB, {
                toValue: 1,
                duration:1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
            
            
            Animated.timing(trendD, {
                toValue: 1,
                duration:1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
            
        ]).start()
    }


    

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback)
    const AnimatedArrow = Animated.createAnimatedComponent(AntDesign)
    const AnimatedView = Animated.createAnimatedComponent(View)
    const AnimatedText = Animated.createAnimatedComponent(Text)


    return (
        <AnimatedView style={styles.container}>

        
            <AnimatedView>
                <AnimatedArrow name="down"
                        onPress={animateTrends} 
                        size={25} 
                        style={{top:60,left:200}}
                        color='black'>
                </AnimatedArrow>
            </AnimatedView>

            <AnimatedView style={{top:100, left:170, width: 90, height: 25, 
                                    justifyContent:'center', alignItems:'center', 
                                    transform : [{scale: trendA}],
                                    borderWidth:1, borderRadius:5}}>
                <AnimatedTouchable>
                    <AnimatedText>Sports</AnimatedText>
                </AnimatedTouchable>
            </AnimatedView>

            <AnimatedView style={{top:105, left:170, width: 90, height: 25, 
                                    justifyContent:'center', alignItems:'center', 
                                    transform : [{scale: trendC}],
                                    borderWidth:1, borderRadius:5}}>
                <AnimatedTouchable>
                    <AnimatedText>Holidays</AnimatedText>
                </AnimatedTouchable>
            </AnimatedView>

            <AnimatedView style={{top:110, left:170, width: 90, height: 25, 
                                    justifyContent:'center', alignItems:'center', 
                                    transform : [{scale: trendB}],
                                    borderWidth:1, borderRadius:5}}>
                <AnimatedTouchable>
                    <AnimatedText>Dance</AnimatedText>
                </AnimatedTouchable>
            </AnimatedView>


            <AnimatedView style={{top:115, left:170, width: 90, height: 25, 
                                    justifyContent:'center', alignItems:'center', 
                                    transform : [{scale: trendD}],
                                    borderWidth:1, borderRadius:5}}>
                <AnimatedTouchable>
                    <AnimatedText>Art</AnimatedText>
                </AnimatedTouchable>
            </AnimatedView>

            <AnimatedView style={{top:-40, left:176, width: 70, height: 35, 
                                    justifyContent:'center', alignItems:'center', flexDirection:'row',
                                    transform : [{scale: searchBar}]}}>
                <AnimatedTouchable>
                    <AntDesign name="search1" size={20} ></AntDesign>
                </AnimatedTouchable>

                <AnimatedTouchable>
                    <AntDesign style={{left:7}} name="ellipsis1" size={20}  ></AntDesign>
                </AnimatedTouchable>
            </AnimatedView>

        </AnimatedView>

    );
}

const styles = StyleSheet.create({

    container: {
      width:350,
      height:600,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 10,
    },
    





});


export default TrendsAnimations;