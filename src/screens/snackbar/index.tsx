import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../../components/button';

const SnackbarScreen = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(100)).current;
  const [yValue, setYValue] = useState(100);

  useEffect(() => {
    animValue.addListener(({value}) => setYValue(value));
    return () => {
      animValue.removeAllListeners();
    };
  }, [animValue]);

  const onPressShow = () => {
    if (yValue === 100) {
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.circle),
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(animValue, {
          toValue: 100,
          duration: 300,
          easing: Easing.in(Easing.circle),
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPressShow}>Show Snackbar</Button>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          transform: [{translateY: animValue}],
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 24,
            paddingHorizontal: 20,
            paddingVertical: 14,
            borderRadius: 8,
            backgroundColor: '#222',
          }}>
          <Ionicons
            name="information-circle-outline"
            color={'white'}
            size={24}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontWeight: '400',
              color: 'white',
            }}>
            Snackbar is showing up!
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default SnackbarScreen;
