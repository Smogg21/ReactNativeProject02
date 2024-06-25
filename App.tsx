import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Salvatore Pazzaglia" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
