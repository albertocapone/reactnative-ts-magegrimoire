import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type Character = {
  id: number,
  name: string,
  class: string,
  level: number
};

export type AppNavigatorParamList = {
  Home: undefined,
  Grimoire: Character | undefined
};

export type HomeNavigationProp = StackNavigationProp<AppNavigatorParamList, 'Home'>;

export type GrimoireNavigationProp = StackNavigationProp<AppNavigatorParamList, 'Grimoire'>;

export type GrimoireRouteProp = RouteProp<AppNavigatorParamList, 'Grimoire'>;

export type HomeProps = {
  navigation: HomeNavigationProp
};

export type GrimoireProps = {
  navigation: GrimoireNavigationProp
  route: GrimoireRouteProp
};