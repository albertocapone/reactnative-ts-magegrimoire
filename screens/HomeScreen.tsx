import React from 'react';
//UI
import { Button, StyleSheet, Text, View } from 'react-native';
//Types
import { HomeProps } from '../types';
import CharacterList from '../components/home/CharacterList';

const Home: React.FC<HomeProps> = (props) => {
  
  const {navigation} = props;

  return (
    <View>
      <Text>I'm HOME!</Text>
      <CharacterList navigation={navigation} />
    </View>
  );
}

export default Home;