import React from "react";
import { Animated, Dimensions, View } from "react-native";
import styled from 'styled-components/native';

import {DATA} from "../constants";

const { width } = Dimensions.get('screen');

const DotContainer = styled.View`
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: 100px;
    `;

const Dot = styled(Animated.View)`
      height: 10px;
      width: 10px;
      border-radius: 5px;
      background-color: white;
      margin: 10px;
    `;

export default function IndicatorDotz({ scrollX }) {

    function generateScale(index) {
        // range values are as follows
        // prevSlide, currentSlide, nextSlide
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const outputRange = [0.5, 0.9, 0.5];

        // takes input range above and
        const scale = scrollX.interpolate({
            inputRange,
            outputRange,
            extrapolate: 'clamp',
        });

        return { scale };
    }

    return (
        <DotContainer>
            {
                DATA.map((_, index) =>
                    <Dot key={`indicator-${index}`} style={{transform: [generateScale(index)]}}/>)
            }
        </DotContainer>
    )
}