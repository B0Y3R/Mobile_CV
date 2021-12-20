import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, Animated } from "react-native";
const { width, height } = Dimensions.get('screen');

export default function Square({ scrollX }) {

    const YOLO = Animated.modulo(
        Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
        1
    );

    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['30deg', '0deg', '30deg']
    });

    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    });


    // couldn't find a way to incorporate the animations so i had to feed them
    // in with inline styles :(
    const AnimatedSquare = styled(Animated.View)`
        width: ${width * 2}px;
        height: ${width * 2}px;
        background-color: white;
        border-radius: 80px;
        position: absolute;
        top: -${height * 0.5}px;
        left: -${height * 0.3}px;
    `;

    return (
        <AnimatedSquare
            style={{
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.7,
                shadowRadius: 3,
                transform: [{
                    rotate,
                },
                {
                    translateX,
                }],
            }}
        />
    )
}