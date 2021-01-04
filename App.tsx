import React from 'react';
//UI
import { StyleSheet } from 'react-native';
//Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppNavigatorParamList } from './types';
//Screens
import Home from './screens/HomeScreen';
import Grimoire from './screens/GrimoireScreen';

const {Navigator, Screen} = createStackNavigator<AppNavigatorParamList>();

const App = () => {
  return (
   <NavigationContainer>
     <Navigator initialRouteName="Home">
       <Screen 
       name="Home" 
       component={Home} 
       />
       <Screen 
       name="Grimoire" 
       component={Grimoire} 
       />
     </Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
