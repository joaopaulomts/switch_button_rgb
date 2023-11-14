import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorChanger from '../../components/ColorChanger';

//componente
const ColorScreen = () => {
  //Teremos 3 estados, um para cada RGB
  const [vermelho, setVermelho] = useState(0);
  const [verde, setVerde] = useState(0);
  const [azul, setAzul] = useState(0);

  return (
    <View>
      <Text>Criador de cores RGB</Text>
      <ColorChanger
        onIncrease={() => setVermelho(vermelho + 25)}
        onDecrease={() => setVermelho(vermelho - 25)}
        name="Vermelho"
      />
      <ColorChanger
        onIncrease={() => setVerde(verde + 25)}
        onDecrease={() => setVerde(verde - 25)}
        name="Verde"
      />
      <ColorChanger
        onIncrease={() => setAzul(azul + 25)}
        onDecrease={() => setAzul(azul - 25)}
        name="Azul"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${vermelho}, ${verde}, ${azul})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorScreen;
