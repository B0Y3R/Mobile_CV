import  React, { useRef } from 'react';
import {StatusBar, Animated } from 'react-native';
import styled from 'styled-components/native';

import RenderItem from './components/RenderItem';
import Backdrop from "./components/Backdrop";
import Square from './components/Square';
import IndicatorDotz from "./components/IndicatorDotz";

import { DATA } from './constants';

const AppContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
      <AppContainer>
        <StatusBar hidden />
          <Backdrop scrollX={scrollX} />
          <Square scrollX={scrollX} />
          <Animated.FlatList
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA}
              scrollEventThrottle={32}
              onScroll={
                  Animated.event(
                      [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                      {useNativeDriver: false}
                  )
              }
              keyExtractor={item => item.key}
              renderItem={RenderItem}
              contentContainerStyle={{
                  paddingBottom: 100,
              }}
          />
          <IndicatorDotz scrollX={scrollX} />
      </AppContainer>
      );
}