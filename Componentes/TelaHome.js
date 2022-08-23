import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import netflix from '../assets/netflix.jpg';

export default function TelaHome () {
  return (
    <View style={estilo.container}>
      <Image source={netflix} style={{ width: 1200, height: 700 }} />
    </View>

  );
};