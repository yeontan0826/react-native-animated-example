import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigation from './src/navigation/rootStack';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
