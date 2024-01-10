import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import AnimationListScreen from '../screens/animationList';
import FadeInOutScreen from '../screens/fadeInOut';
import TranslateScreen from '../screens/translate';
import Header from '../components/header';
import SnackbarScreen from '../screens/snackbar';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="AnimationList"
      screenOptions={{
        header: Header,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="AnimationList"
        component={AnimationListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Fade" component={FadeInOutScreen} />
      <Stack.Screen name="Translate" component={TranslateScreen} />
      <Stack.Screen name="Snackbar" component={SnackbarScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
