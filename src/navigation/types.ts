import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  AnimationList: undefined;
  Fade: undefined;
  Translate: undefined;
  Snackbar: undefined;
  Drawer: undefined;
  Collapse: undefined;
  ProgressBar: undefined;
  Skeleton: undefined;
  LayoutAnimation: undefined;
  LayoutAnimationHeader: undefined;
  LayoutAnimationCollapse: undefined;
  PanResponder: undefined;
  PanResponderBall: undefined;
  PanResponderModal: undefined;
  PanResponderSlider: undefined;
};

export type RootStackProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
