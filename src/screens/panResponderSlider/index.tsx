import {useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';

const PanResponderSliderScreen = (): JSX.Element => {
  const {width} = useWindowDimensions();
  const [focus, setFocus] = useState(0);
  const animValue = useRef(new Animated.Value(0)).current;
  const pendingRef = useRef(true);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const toRight = gestureState.dx < -80;
      const toLeft = gestureState.dx > 80;

      if (toRight && pendingRef.current && focus < 3) {
        pendingRef.current = false;
        setFocus(prev => prev + 1);
        Animated.timing(animValue, {
          toValue: -(focus + 1) * width,
          duration: 500,
          useNativeDriver: true,
        }).start(({finished}) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }

      if (toLeft && pendingRef.current && focus > 0) {
        pendingRef.current = false;
        setFocus(prev => prev - 1);
        Animated.timing(animValue, {
          toValue: -(focus - 1) * width,
          duration: 500,
          useNativeDriver: true,
        }).start(({finished}) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }
    },
  });

  const onPressIndicator = (index: number) => {
    setFocus(index);
    Animated.timing(animValue, {
      toValue: -index * width,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* content box */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          left: 0,
          flexDirection: 'row',
          transform: [{translateX: animValue}],
        }}>
        {[...Array(4)].map((_, index) => (
          <View
            key={String(index)}
            style={{
              width,
              height: width,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}>
            <Text style={{fontSize: 50, color: 'white'}}>{index}</Text>
          </View>
        ))}
      </Animated.View>
      {/* indicator */}
      <View
        style={{
          height: width,
          justifyContent: 'flex-end',
          marginTop: 50,
        }}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(4)].map((_, index) => (
            <TouchableWithoutFeedback
              key={String(index)}
              onPress={() => onPressIndicator(index)}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  margin: 4,
                  borderRadius: 5,
                  backgroundColor: focus === index ? '#ffa100' : '#ffa10050',
                }}
              />
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PanResponderSliderScreen;
