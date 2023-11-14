import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ColorScreen from './src/screens/ColorScreen';


function App(): JSX.Element {
 
  return (
    <SafeAreaView>
      <ColorScreen />
    </SafeAreaView>
  );
}

export default App;