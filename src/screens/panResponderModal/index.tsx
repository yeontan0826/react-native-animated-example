import {useRef, useState} from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/button';

const ListItem = ({color = '#333', icon, title, onPress}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
        }}>
        <AntDesign name={icon} size={20} color={color} />
        <Text style={{color, fontSize: 16, marginLeft: 20}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const PanResponderModalScreen = (): JSX.Element => {
  const animValue = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 100) {
        hideModal();
      }
    },
  });

  const showModal = () => {
    setShow(true);
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setShow(false);
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <Button onPress={showModal}>Show Modal</Button>
      <>
        {/* menu background */}
        {show && (
          <TouchableWithoutFeedback onPress={hideModal}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#00000090',
                opacity: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            />
          </TouchableWithoutFeedback>
        )}
      </>
      {/* menu contents */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          width: '100%',
          bottom: animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0],
          }),
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: 'white',
        }}>
        <ListItem onPress={hideModal} icon={'pushpino'} title={'저장하기'} />
        <ListItem onPress={hideModal} icon={'hearto'} title={'좋아요'} />
        <ListItem onPress={hideModal} icon={'delete'} title={'삭제하기'} />
        <ListItem
          onPress={hideModal}
          color={'#999'}
          icon={'back'}
          title={'닫기'}
        />
      </Animated.View>
    </View>
  );
};

export default PanResponderModalScreen;
