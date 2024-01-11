import {useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

const PanResponderFontSliderScreen = (): JSX.Element => {
  const [step, setStep] = useState(0);

  const onPress = (index: number) => {
    setStep(index);
  };

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
      title: {fontSize: 38, lineHeight: 50},
      body: {fontSize: 18},
    },
  ];

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
          <View
            style={{
              position: 'absolute',
              left: BOX / 2 - CIRCLE / 2 + step * BOX,
              width: CIRCLE,
              height: CIRCLE,
              backgroundColor: '#333',
              borderRadius: CIRCLE / 2,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PanResponderFontSliderScreen;
