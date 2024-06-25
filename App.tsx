import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Salvatore Pazzaglia" /> */}

      <CounterScreen />
    </SafeAreaView>
  );
};
