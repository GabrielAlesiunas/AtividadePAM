import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import universal from '../assets/universal.png';

export default function TelaHome () {
  return (
    <View style={estilo.container}>
      <Image source={universal} style={{ width: 1000, height: 510 }} />
    </View>
    

  );
};