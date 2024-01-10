import {useRef} from 'react';
import {Animated, Easing, View} from 'react-native';

import Button from '../../components/button';
import GapView from '../../components/gap';

const ProgressBarScreen = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(0)).current;

  let clickCount = 0;

  // 수동으로 20%씩 채워주는 역할
  const onPressRun = () => {
    if (clickCount < 5) {
      clickCount += 1;

      animValue.extractOffset();
      Animated.spring(animValue, {
        toValue: 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }).start();
    }
  };

  // 자동으로 100%까지 채워주는 역할
  const onPressAutoRun = () => {
    Animated.sequence([
      Animated.spring(animValue, {
        toValue: 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }),
      Animated.delay(150),
      Animated.spring(animValue, {
        toValue: 66,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }),
      Animated.delay(150),
      Animated.spring(animValue, {
        toValue: 100,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // 처음 값으로 되돌아가는 액션
  const onPressReset = () => {
    clickCount = 0;

    animValue.flattenOffset();
    Animated.timing(animValue, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 24}}>
      <GapView gap={10} style={{marginBottom: 50}}>
        <Button onPress={onPressRun}>run</Button>
        <Button onPress={onPressAutoRun}>auto run</Button>
        <Button onPress={onPressReset}>reset</Button>
      </GapView>

      <View style={{position: 'relative', justifyContent: 'center'}}>
        {/* progress 바닥 */}
        <View
          style={{
            height: 8,
            borderRadius: 4,
            backgroundColor: 'lightgray',
          }}
        />
        {/* progress */}
        <Animated.View
          style={{
            position: 'absolute',
            height: '100%',
            width: animValue.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            borderRadius: 8,
            backgroundColor: 'blue',
          }}
        />
      </View>
    </View>
  );
};
export default ProgressBarScreen;
