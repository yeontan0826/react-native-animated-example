import {View} from 'react-native';
import {collapseData} from './data';
import CollapseItem from './item';

const CollapseScreen = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      {collapseData.map((item, index) => (
        <CollapseItem key={String(index)} item={item} />
      ))}
    </View>
  );
};

export default CollapseScreen;
