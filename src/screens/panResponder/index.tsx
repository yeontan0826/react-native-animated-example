import {useState} from 'react';
import {PanResponder, Text, View} from 'react-native';

const PanResponderScreen = (): JSX.Element => {
  const [status, setStatus] = useState({
    // 터치 후 누적거리
    dx: 0,
    dy: 0,
    // 제일 최근에 찍힌 좌표 (절대좌표)
    moveX: 0,
    moveY: 0,
    // 제스쳐의 속도
    vx: 0,
    vy: 0,
    // 터치 시작지점
    x0: 0,
    y0: 0,
  });

  const panResponder = PanResponder.create({
    // permission method (사용할 method를 boolean으로 명시)
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    // response method
    onPanResponderGrant: () => {},
    onPanResponderReject: () => {},

    // handler method
    onPanResponderStart: (_, gestureState) => {
      setStatus(prev => {
        return {
          ...prev,
          x0: gestureState.x0,
          y0: gestureState.y0,
        };
      });
    },
    onPanResponderMove: (_, gestureState) => {
      setStatus({
        ...gestureState,
        x0: status.x0,
        y0: status.y0,
      });
    },
    onPanResponderEnd: () => {},
    onPanResponderRelease: () => {},
  });

  const moveXSize = Math.floor(status.moveX - status.x0);
  const moveYSize = Math.floor(status.moveY - status.y0);

  return (
    <View
      {...panResponder.panHandlers}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        {moveXSize > 0 ? (
          <Text>{moveXSize} 만큼 오른쪽으로 가는 중</Text>
        ) : (
          <Text>{-moveXSize} 만큼 왼쪽으로 가는 중</Text>
        )}
        {moveYSize > 0 ? (
          <Text>{moveYSize} 만큼 아래쪽로 가는 중</Text>
        ) : (
          <Text>{-moveYSize} 만큼 위쪽으로 가는 중</Text>
        )}
      </View>
      <View style={{position: 'absolute', left: 40, bottom: 80}}>
        <Text>dx: {status.dx}</Text>
        <Text>dx: {status.dy}</Text>
        <Text>moveX: {status.moveX}</Text>
        <Text>moveY: {status.moveY}</Text>
        <Text>vx: {status.vx}</Text>
        <Text>vx: {status.vy}</Text>
        <Text>x0: {status.x0}</Text>
        <Text>y0: {status.y0}</Text>
      </View>
    </View>
  );
};

export default PanResponderScreen;
