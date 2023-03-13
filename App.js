import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {SimpleStack} from './src/routes/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <SimpleStack />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
