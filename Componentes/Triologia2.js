import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import tropa2 from '../assets/tropa2.jpg';

export default function Triologia2() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Tropa de Elite 2
      </Text>

      <Image source={tropa2} style={{ width: 640, height: 360 }} />

      <Text style={estilo.fotos}>
        Assista agora o filme
      </Text>
      <a href="url">https://www.youtube.com/watch?v=siWNIGsHwjs</a>
    </View>
  );
}