import { Dimensions, Platform, PixelRatio } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const scale = 360

function normalize(size){
    const newSize = size * scale
    if (Platform.OS == 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2 
    }
}


export default {WIDTH , HEIGHT, normalize}