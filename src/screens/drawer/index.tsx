import {useRef} from 'react';
import {
  Animated,
  Easing,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import GapView from '../../components/gap';

const DrawerScreen = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(0)).current;

  const {width} = useWindowDimensions();

  const onPressOpen = () => {
    Animated.timing(animValue, {
      toValue: 1,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  const onPressHide = () => {
    Animated.timing(animValue, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      {/* DRAWER */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: '80%',
          height: '100%',
          backgroundColor: 'white',
          zIndex: 2,
          transform: [
            {
              translateX: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}>
        <GapView style={{padding: 20}} gap={18}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>MENU</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>MENU</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>MENU</Text>
        </GapView>
        <TouchableOpacity
          style={{position: 'absolute', top: 10, right: 10}}
          activeOpacity={0.6}
          onPress={onPressHide}>
          <MaterialIcons name="close" size={32} color={'black'} />
        </TouchableOpacity>
      </Animated.View>

      {/* MENU BACKGROUND */}
      <TouchableWithoutFeedback onPress={onPressHide}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['#00000000', '#00000090'],
            }),
            zIndex: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}
        />
      </TouchableWithoutFeedback>

      {/* SCREEN */}
      <View style={{flex: 1}}>
        <TouchableHighlight
          style={{borderRadius: 100}}
          underlayColor={'#ffffff50'}
          onPress={onPressOpen}>
          <View style={{position: 'absolute', right: 14, top: 14}}>
            <MaterialIcons name="menu" size={30} color={'black'} />
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default DrawerScreen;
