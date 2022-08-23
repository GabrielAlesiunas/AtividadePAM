import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import tropa1 from '../assets/tropa1.jpg';

export default function Triologia1() {
  return (

    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Tropa de Elite 1
      </Text>

      <Image source={tropa1} style={{ width: 700, height: 400 }} />

      <Text style={estilo.fotos}>
        Assista agora o filme
      </Text>
      <a href="url">https://www.youtube.com/watch?v=EYtxVT0VdEY</a>
    </View>

  );
}