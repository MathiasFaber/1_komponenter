import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FC from './components/FirstComponent'
import PC from './components/PropsComponent'
import BC from './components/ButtonsComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <FC></FC>
      <PC name={'Mathias'}></PC>
      <PC name={'Bob'}></PC>
      <PC name={'Ib'}></PC>
      <BC></BC>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
