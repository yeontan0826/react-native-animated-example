import {useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';

import Button from '../../../components/button';

const TranslateTiming = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(-100)).current;
  const [xValue, setXValue] = useState(-100);

  useEffect(() => {
    animValue.addListener(({value}) => setXValue(Math.trunc(value)));
    return () => {
      animValue.removeAllListeners();
    };
  }, [animValue]);

  const onPressMoveX = () => {
    if (xValue === -100 || xValue === 100) {
      Animated.timing(animValue, {
        toValue: xValue === 100 ? -100 : 100,
        useNativeDriver: true,
        duration: 1000,
      }).start();
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPressMoveX}>Default Move X</Button>
      <Animated.Text
        style={{fontSize: 50, transform: [{translateX: animValue}]}}>
        🦦
      </Animated.Text>
      <Text>Value: {xValue}</Text>
    </View>
  );
};

export default TranslateTiming;
