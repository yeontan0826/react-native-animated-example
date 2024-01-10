import {useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {RootStackParamList, RootStackProps} from '../../navigation/types';

const AnimationListScreen = ({
  navigation,
}: RootStackProps<'AnimationList'>): JSX.Element => {
  const data = useMemo(() => {
    return navigation
      .getState()
      .routeNames.filter(screenName => screenName !== 'AnimationList');
  }, [navigation]);

  const ItemSeparatorComponent = useCallback(() => {
    return <ItemSeparator />;
  }, []);

  const renderItem = useCallback<
    ({item}: {item: keyof RootStackParamList}) => JSX.Element
  >(
    ({item}) => {
      const onPressItem = () => {
        navigation.navigate(item);
      };

      return (
        <Item activeOpacity={0.6} onPress={onPressItem}>
          <ItemLabel>{item}</ItemLabel>
        </Item>
      );
    },
    [navigation],
  );

  return (
    <FlatList
      style={{flex: 1}}
      data={data}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
    />
  );
};

export default AnimationListScreen;

const Item = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const ItemLabel = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

const ItemSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
`;
