import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  AnimationList: undefined;
  Fade: undefined;
  Translate: undefined;
};

export type RootStackProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;