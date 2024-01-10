import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Text, View} from 'react-native';

import Button from '../../../components/button';

const TranslateEasing = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(-100)).current;
  const [opacityValue, setOpacityValue] = useState(-100);

  useEffect(() => {
    animValue.addListener(({value}) => setOpacityValue(Math.trunc(value)));
    return () => {
      animValue.removeAllListeners();
    };
  }, [animValue]);

  const onPressMoveX = () => {
    if (opacityValue === -100 || opacityValue === 100) {
      Animated.timing(animValue, {
        toValue: opacityValue === 100 ? -100 : 100,
        useNativeDriver: true,
        easing: Easing.bezier(0.83, 0, 0.17, 1),
        duration: 1000,
      }).start();
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPressMoveX}>Easing Move X</Button>
      <Animated.Text
        style={{fontSize: 50, transform: [{translateX: animValue}]}}>
        🦦
      </Animated.Text>
      <Text>Value: {opacityValue}</Text>
    </View>
  );
};

export default TranslateEasing;
