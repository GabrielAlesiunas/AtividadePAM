import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";
import { linear } from "react-native/Libraries/Animated/Easing";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: "Source Sans"
  },  
  texto: {
    textAlign: "center"
  },
  resumo: {
    marginStart: "100",
    fontSize: 25,
    fontFamily: "Tahoma",
    fontWeight: "bold"
  },
  descricao: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "Arial",
  }
});

export default estilo;