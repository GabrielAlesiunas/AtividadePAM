import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaDescricao () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.resumo}>
        Resumo dos  filmes:
      </Text> <br/>
        <Text style={estilo.descricao}>
          Tropa de Elite e Tropa de Elite 2 são dois filmes nacionais, de 2007 e 2010 respectivamente, que retratam o dia a dia do Batalhão de Operações Especiais do Rio de Janeiro (BOPE).
      </Text>

      <Text style={estilo.descricao}>
      No primeiro, toda a trama se passa durante uma missão instaurada para garantir a segurança do Papa durante sua visita ao Rio de Janeiro. Já no Tropa de Elite 2: O Inimigo Agora é Outro, há uma morte durante uma rebelião, ações de milícias e uma missão forjada para que um candidato às eleições pudesse conquistar a popularidade do povo.
      </Text>
    </View>
  );
}