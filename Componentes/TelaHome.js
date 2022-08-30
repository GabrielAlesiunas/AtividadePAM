import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import universal from '../assets/universal.png';

export default function TelaHome () {
  return (
    <View style={estilo.container}>
      <Image source={universal} style={{ width: '100%', height:300 }} />
    </View>
    

  );
};