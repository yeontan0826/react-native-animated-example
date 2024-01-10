import {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SkeletonScreen = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ).start();
  }, [animValue]);

  return (
    <View style={{flex: 1}}>
      {[...Array(6)].map((_, index) => {
        return (
          <View
            key={String(index)}
            style={{
              position: 'relative',
              flexDirection: 'row',
              paddingHorizontal: 24,
              paddingVertical: 10,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#dfdfdf',
                borderRadius: 4,
              }}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <View
                style={{
                  width: '80%',
                  height: 20,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: 16,
                  marginTop: 4,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  width: '50%',
                  height: 10,
                  marginTop: 4,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
            </View>

            <Animated.View
              style={{
                position: 'absolute',
                top: -16,
                left: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['-20%', '120%'],
                }),
                transform: [{rotate: '20deg'}],
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#ffffff00', '#ffffff80', '#ffffff00']}>
                <View style={{width: 40, height: 100}} />
              </LinearGradient>
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default SkeletonScreen;
