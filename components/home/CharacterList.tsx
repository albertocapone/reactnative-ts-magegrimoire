import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Character from './CharacterEntry';
import {Character as CharacterType, HomeProps as Props} from '../../types';

const CharacterList: React.FC<Props> = (props) => {

    const { navigation } = props;
    
    const [characters, setCharacters] = useState<CharacterType[]>([]);

    const uuid = require('react-native-uuid');

    useEffect(() => {
        const charactersList = [
          { id: 1, name: "Zero", class: "Thief", level: 13 },
          { id: 2, name: "Elijah", class: "Wizard", level: 13 }
        ]; 
        setCharacters(charactersList);
    }, []);

    return (
      <ScrollView>
        {characters.map((character) => (
          <Character
            key={uuid()}
            navigation={navigation}
            character={character}
          />
        ))}
      </ScrollView>
    );
}

export default CharacterList;