import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import {Character, HomeProps} from '../../types';

type Props = HomeProps & {character: Character};

const CharacterEntry: React.FC<Props> = (props) => {
    
    const { navigation, character } = props;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Grimoire', character)} >
            <View>
                <Text>ID: {character.id}</Text>
                <Text>NAME: {character.name}</Text>
                <Text>CLASS: {character.class}</Text>
                <Text>LEVEL: {character.level}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CharacterEntry;