import {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  View,
} from 'react-native';

import {collapseData} from './data';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const LayoutAnimationCollapseScreen = (): JSX.Element => {
  const [expanded, setExpanded] = useState<number>();

  const onPress = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => (prev === index ? undefined : index));
  };

  return (
    <View style={{flex: 1}}>
      {collapseData.map((value, index) => (
        <View key={String(index)}>
          {/* 질문 */}
          <TouchableWithoutFeedback onPress={() => onPress(index)}>
            <View
              style={{
                backgroundColor: '#006aff',
                paddingHorizontal: 24,
                paddingVertical: 16,
              }}>
              <Text style={{color: 'white'}}>
                {index + 1}) {value.q}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 답변 */}
          {expanded === index && (
            <View
              style={{
                backgroundColor: '#f4f4f4',
                paddingHorizontal: 24,
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}>
              <Text style={{color: 'black'}}>{value.a}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default LayoutAnimationCollapseScreen;
