import {useState} from 'react';
import {LayoutAnimation, Platform, Text, UIManager, View} from 'react-native';
import Button from '../../components/button';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// useState update, create, delete -> LayoutAnimation
// layout animation preset을 이용하면 조금 더 편하게 이용가능
const LayoutAnimationScreen = (): JSX.Element => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    // LayoutAnimation.configureNext(
    //   {
    //     duration: 300,
    //     // type: easeIn, easeInEaseOut, spring, linear
    //     // property: opacity, scaleX, scaleY, scaleXY
    //     create: {
    //       type: 'easeIn',
    //       property: 'opacity',
    //     },
    //     update: {
    //       type: 'spring',
    //       property: 'scaleX',
    //       springDamping: 0.3,
    //     },
    //     delete: {
    //       type: 'linear',
    //       property: 'scaleXY',
    //     },
    //   },
    //   () => console.log('end'),
    //   () => console.log('fail'),
    // );

    setCount(prev => prev * 10);
    setShow(prev => !prev);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPress}>layout animation 작동</Button>
      <View style={{width: 250, height: 250}}>
        <View style={{marginTop: 14, backgroundColor: 'orange'}}>
          <Text style={{fontSize: 30}}>{count}</Text>
        </View>
        {show && (
          <View
            style={{
              alignItems: 'center',
              marginTop: 14,
              backgroundColor: 'green',
            }}>
            <Text style={{fontSize: 30}}>보이는 컴포넌트</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LayoutAnimationScreen;
