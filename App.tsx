import {SafeAreaView, Text, View} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>React Native</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
