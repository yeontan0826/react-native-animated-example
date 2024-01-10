import {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';

import Button from '../../../components/button';

const TranslateInterpolate = (): JSX.Element => {
  const heightAnim = useRef(new Animated.Value(100)).current;
  const [heightValue, setHeightValue] = useState(100);

  useEffect(() => {
    heightAnim.addListener(({value}) => setHeightValue(value));
    return () => {
      heightAnim.removeAllListeners();
    };
  }, [heightAnim]);

  const onPressInterpolate = () => {
    if (heightValue === 100 || heightValue === 200) {
      Animated.timing(heightAnim, {
        toValue: heightValue === 100 ? 200 : 100,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPressInterpolate}>Interpolate</Button>
      <Animated.View
        style={{
          width: 100,
          height: heightAnim,
          marginTop: 20,
          backgroundColor: heightAnim.interpolate({
            inputRange: [100, 150, 200],
            outputRange: ['#ffa100', 'red', '#aff100'],
          }),
          transform: [
            {
              rotate: heightAnim.interpolate({
                inputRange: [100, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default TranslateInterpolate;
