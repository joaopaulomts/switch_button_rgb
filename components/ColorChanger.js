import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorChanger = ({name, onIncrease, onDrecrease}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Button title={`Incrementar ${name}`} onPress={() => onIncrease()} />
      <Button title={`Decrementar ${name}`} onPress={() => onDrecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorChanger;
