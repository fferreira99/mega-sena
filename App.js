import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import imagemDeFundo from './assets/bolinhas-img.jpg';

// Bloco de código 01: lógica de geração das dezenas aleatórias para o sorteio.
export default function App() {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero);
      }
    }
    setNumeros(novosNumeros);
  };

  // Bloco de código 02: modelagem da interface da aplicação.
  return (
    <ImageBackground
      source={imagemDeFundo}
      style={estilos.fundo}
    >
      <View style={estilos.container}>
        <Button title="Gerar Números" onPress={gerarNumeros} />
        <View style={estilos.containerNumeros}>
          {numeros.map((numero, indice) => (
            <View key={indice} style={estilos.circuloNumero}>
              <Text style={estilos.textoNumero}>{numero}</Text>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

// Bloco de código 03: estilos incorporados na aplicação.
const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNumeros: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  circuloNumero: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textoNumero: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});