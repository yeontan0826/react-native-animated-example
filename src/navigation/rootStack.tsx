import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import AnimationListScreen from '../screens/animationList';
import FadeInOutScreen from '../screens/fadeInOut';
import TranslateScreen from '../screens/translate';
import Header from '../components/header';
import SnackbarScreen from '../screens/snackbar';
import DrawerScreen from '../screens/drawer';
import CollapseScreen from '../screens/collapse';
import ProgressBarScreen from '../screens/progressBar';
import SkeletonScreen from '../screens/skeleton';
import LayoutAnimationScreen from '../screens/layoutAnimation';
import LayoutAnimationHeaderScreen from '../screens/layoutAnimationHeader';
import LayoutAnimationCollapseScreen from '../screens/layoutAnimationCollapse';

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
      <Stack.Screen name="ProgressBar" component={ProgressBarScreen} />
      <Stack.Screen name="Skeleton" component={SkeletonScreen} />
      <Stack.Screen name="LayoutAnimation" component={LayoutAnimationScreen} />
      <Stack.Screen
        name="LayoutAnimationHeader"
        component={LayoutAnimationHeaderScreen}
      />
      <Stack.Screen
        name="LayoutAnimationCollapse"
        component={LayoutAnimationCollapseScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
