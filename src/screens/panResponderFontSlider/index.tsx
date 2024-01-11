import {useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const BOX = 50;
const CIRCLE = 24;
const FONT = [
  {
    title: {fontSize: 20, lineHeight: 32},
    body: {fontSize: 12},
  },
  {
    title: {fontSize: 24, lineHeight: 38},
    body: {fontSize: 14},
  },
  {
    title: {fontSize: 30, lineHeight: 40},
    body: {fontSize: 16},
  },
  {
    title: {fontSize: 36, lineHeight: 50},
    body: {fontSize: 18},
  },
];

const PanResponderFontSliderScreen = (): JSX.Element => {
  const [step, setStep] = useState(0);
  const circleAnim = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderStart: () => {
      circleAnim.setValue(step * BOX);
    },
    onPanResponderMove: (_, gestureState) => {
      circleAnim.setValue(gestureState.dx + step * BOX);
    },
    onPanResponderEnd: (_, gestureState) => {
      const fontStep = step + Math.round(gestureState.dx / 50);
      const toValue = fontStep * BOX;
      setStep(fontStep);

      Animated.spring(circleAnim, {
        toValue,
        speed: 100,
        useNativeDriver: true,
      }).start();
    },
  });

  const onPress = (index: number) => {
    setStep(index);
    Animated.spring(circleAnim, {
      toValue: index * BOX,
      speed: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* text step 영역*/}
      <View
        style={{
          width: 200,
          height: 150,
          justifyContent: 'flex-end',
        }}>
        <View>
          <Text
            style={[FONT[step].title, {color: 'black', fontWeight: 'bold'}]}>
            Font Step {step + 1}
          </Text>
          <Text style={[FONT[step].body, {color: 'black'}]}>
            font body style
          </Text>
        </View>

        {/* slider 영역 */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* 가로선 */}
          <View
            style={{
              position: 'absolute',
              top: 24,
              width: BOX * 3,
              borderBottomColor: '#ddd',
              borderBottomWidth: 2,
            }}
          />
          {/* 회색 동그라미 */}
          <View style={{flexDirection: 'row'}}>
            {[...Array(4)].map((_, index) => (
              <TouchableWithoutFeedback
                key={String(index)}
                onPress={() => onPress(index)}>
                <View
                  style={{
                    borderWidth: 1,
                    width: BOX,
                    height: BOX,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#ddd',
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              position: 'absolute',
              left: BOX / 2 - CIRCLE / 2,
              width: CIRCLE,
              height: CIRCLE,
              backgroundColor: '#333',
              borderRadius: CIRCLE / 2,
              transform: [{translateX: circleAnim}],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PanResponderFontSliderScreen;
