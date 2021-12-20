import React from 'react';
import {Animated, Dimensions, StyleSheet} from "react-native";
const { width } = Dimensions.get('screen');
import { DATA } from '../constants';

export default function Backdrop({ scrollX }) {
    // allows for transition between background colors
    const backgroundColor = scrollX.interpolate({
        inputRange: DATA.map((_, i) => i * width),
        outputRange: DATA.map((bg) => bg.backdrop),
    });

    return <Animated.View style={[ StyleSheet.absoluteFillObject, { backgroundColor }]}/>
}