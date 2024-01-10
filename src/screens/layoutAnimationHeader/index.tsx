import {useState} from 'react';
import {
  LayoutAnimation,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  Text,
  UIManager,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const LayoutAnimationHeaderScreen = (): JSX.Element => {
  const [expanded, setExpanded] = useState(true);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (y > 40) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{height: 1000}}
      onScroll={onScroll}
      scrollEventThrottle={16}>
      {expanded ? (
        <View style={{backgroundColor: '#555'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#333',
                marginLeft: 20,
                marginRight: 16,
                marginBottom: -10,
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="person" size={30} color={'#555'} />
            </View>
            <View>
              <Text
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'white',
                }}>
                개발자 수달
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                철이 들면 힘을내야지!
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            position: 'relative',
            height: 350,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#555',
          }}>
          <View
            style={{position: 'absolute', bottom: -100, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#333',
                width: 160,
                height: 160,
                borderRadius: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="person" size={100} color={'#555'} />
            </View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              큰 프로필 이미지
            </Text>
            <Text style={{marginTop: 10, color: 'black'}}>
              큰 프로필 이미지
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default LayoutAnimationHeaderScreen;
