import {ScrollView} from 'react-native';

import GapView from '../../components/gap';
import TranslateTiming from './timing';
import TranslateEasing from './easing';
import TranslateInterpolate from './interpolate';

const TranslateScreen = (): JSX.Element => {
  return (
    <ScrollView style={{flex: 1}}>
      <GapView style={{paddingVertical: 20}} gap={60}>
        <TranslateTiming />
        <TranslateEasing />
        <TranslateInterpolate />
      </GapView>
    </ScrollView>
  );
};

export default TranslateScreen;
