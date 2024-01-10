import {useRef} from 'react';
import {Animated, PanResponder, Text, View} from 'react-native';

const PanResponderBallScreen = (): JSX.Element => {
  const panAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: panAnim.x, dy: panAnim.y}], {
      useNativeDriver: false,
    }),
    onPanResponderEnd: (_, gestureState) => {
      Animated.decay(panAnim, {
        velocity: {x: gestureState.vx, y: gestureState.vy}, // 초기 속도
        deceleration: 0.997, // 감속값
        useNativeDriver: true,
      }).start();
    },
    onPanResponderRelease: (_, gestureState) => {
      setTimeout(() => {
        panAnim.setValue({x: 0, y: 50});
        Animated.spring(panAnim, {
          toValue: {x: 0, y: 0},
          friction: 7,
          tension: 30,
          useNativeDriver: true,
        }).start();
      }, 1500);
    },
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: 20,
          transform: [{translateX: panAnim.x}, {translateY: panAnim.y}],
        }}>
        <Text style={{fontSize: 100}}>⚽️</Text>
      </Animated.View>
    </View>
  );
};

export default PanResponderBallScreen;
