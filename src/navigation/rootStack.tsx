import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import AnimationListScreen from '../screens/animationList';
import FadeInOutScreen from '../screens/fadeInOut';
import TranslateScreen from '../screens/translate';
import Header from '../components/header';
import SnackbarScreen from '../screens/snackbar';
import DrawerScreen from '../screens/drawer';
import CollapseScreen from '../screens/collapse';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="AnimationList"
      screenOptions={{
        header: Header,
        contentStyle: {backgroundColor: 'white'},
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen
        name="AnimationList"
        component={AnimationListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Fade" component={FadeInOutScreen} />
      <Stack.Screen name="Translate" component={TranslateScreen} />
      <Stack.Screen name="Snackbar" component={SnackbarScreen} />
      <Stack.Screen name="Drawer" component={DrawerScreen} />
      <Stack.Screen name="Collapse" component={CollapseScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
