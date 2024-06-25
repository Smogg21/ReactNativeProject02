import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';


export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Salvatore Pazzaglia" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
