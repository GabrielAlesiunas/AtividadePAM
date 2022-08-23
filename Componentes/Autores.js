import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import capitao from '../assets/capitao.jpg';
import andre from '../assets/andre.jpg';
import rosane from '../assets/rosane.jpg';
import sandro from '../assets/sandro.jpg';

export default function Autores () {
  return (
    <View style={estilo.container}>
      <Image source={capitao} style={{ width: 100, height: 100}} />
      <Text>Capitão Nascimento</Text> <br/>
      <Image source={andre} style={{ width: 100, height: 100}} />
      <Text>André Mathias</Text> <br/>
      <Image source={rosane} style={{ width: 100, height: 100}} />
      <Text>Rosane</Text> <br/>
      <Image source={sandro} style={{ width: 100, height: 100}} />
      <Text>Edivan Rocha</Text> <br/>
    </View>

    
  );
};