import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

import Button from '../../components/button';
import GapView from '../../components/gap';

const FadeInOutScreen = () => {
  const opacityValue = useRef(new Animated.Value(1)).current;
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    opacityValue.addListener(({value}) => setOpacity(value));
    return () => {
      opacityValue.removeAllListeners();
    };
  }, [opacityValue]);

  const onPressFadeInOut = () => {
    if (opacity === 1 || opacity === 0) {
      Animated.timing(opacityValue, {
        toValue: opacity === 1 ? 0 : 1,
        useNativeDriver: true,
        duration: 1000,
      }).start();
    }
  };

  return (
    <GapView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      gap={10}>
      <Button onPress={onPressFadeInOut}>Fade In & Out</Button>
      <Animated.Text style={{fontSize: 50, opacity: opacityValue}}>
        🦦
      </Animated.Text>
    </GapView>
  );
};

export default FadeInOutScreen;
