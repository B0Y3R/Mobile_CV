import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('screen');

const RenderItemContainer = styled.View`
  width: ${width}px;
  align-items: center;
`
const ImageContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.Image`
  width: ${width / 2}px;
  height: ${width / 2}px;
`;

const TextContainer = styled.View`
  flex: 0.3;
`;

const Title = styled.Text`
  font-weight: 800;
  font-size: 34px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

const Description = styled.Text`
  font-weight: 500;
  color: white;
  font-size: 20px;
  padding: 15px;
`;

const renderItem = ({ item }) => {
    return (
        <RenderItemContainer >
            <ImageContainer>
                <Image source={{ uri: item.image }}  />
            </ImageContainer>
            <TextContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
            </TextContainer>
        </RenderItemContainer>
    )
}

export default renderItem;