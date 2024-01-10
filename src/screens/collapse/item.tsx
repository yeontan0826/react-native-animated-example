import {useRef} from 'react';
import {Animated, Text, TouchableWithoutFeedback, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ICollapseData} from './data';

const CollapseItem = ({item}: {item: ICollapseData}): JSX.Element => {
  const animValue = useRef(new Animated.Value(0)).current;

  let isOpened = false;

  // 클릭하면 애니메이션이 작동하는 함수
  const onPress = () => {
    Animated.timing(animValue, {
      toValue: isOpened ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      isOpened = !isOpened;
    });
  };

  return (
    <View>
      {/* 질문 영역 */}
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 24,
            paddingVertical: 14,
            backgroundColor: '#4c5ced',
          }}>
          <Text
            style={{
              flexShrink: 1,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {item.q}
          </Text>
          <Animated.View
            style={{
              flexShrink: 1,
              marginLeft: 14,
              transform: [
                {
                  rotate: animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}>
            <Ionicons name="chevron-down" color={'white'} size={18} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {/* 답변 영역 */}
      <Animated.View
        style={{
          height: animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          }),
          justifyContent: 'center',
          paddingHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: '#4c5ced',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'normal', color: 'black'}}>
          {item.a}
        </Text>
      </Animated.View>
    </View>
  );
};

export default CollapseItem;
