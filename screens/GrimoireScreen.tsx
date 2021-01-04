import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';
//UI
import { Button, StyleSheet, Text, View } from 'react-native';
//Types
import { GrimoireProps } from '../types';

const Grimoire: React.FC<GrimoireProps> = (props) => {

  const {navigation, route: {params} } = props;

  return (
    <View>
      <Text>I'm GRIMOIRE!</Text>
      {params && <Text>{params.name}</Text>}
      <Button title="GOTO HOME" onPress={ () => navigation.navigate("Home")} />
    </View>
  );
}

export default Grimoire;