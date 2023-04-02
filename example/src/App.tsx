import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { BluetoothManager, BluetoothEscposPrinter, BluetoothTscPrinter } from 'react-native-esc-pos-printer';
// import { multiply } from 'react-native-esc-pos-printer';
// import { EscPosPrinter } from 'react-native-esc-pos-printer';



export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [isBluetoothManager, setIsBluetoothManager] = React.useState<string | undefined>();
  const [isBluetoothEscposPrinter, setIsBluetoothEscposPrinter] = React.useState<string | undefined>();
  const [isBluetoothTscPrinter, setBluetoothTscPrinter] = React.useState<string | undefined>();
  // React.useEffect(() => {
  //   EscPosPrinter.multiply(4, 7).then(setResult);
  //   // multiply(3, 7).then(setResult);
  // }, []);


  React.useEffect(() => {
    BluetoothManager?.isSDKConnected().then(value => {
      setIsBluetoothManager(value);
    });
  }, []);

  React.useEffect(() => {
    BluetoothEscposPrinter?.isSDKConnected().then(value => {
      setIsBluetoothEscposPrinter(value);
    });
  }, []);

  React.useEffect(() => {
    BluetoothTscPrinter?.isSDKConnected().then(value => {
      setBluetoothTscPrinter(value);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>BluetoothManager: {isBluetoothManager}</Text>
      <Text>BluetoothEscposPrinter: {isBluetoothEscposPrinter}</Text>
      <Text>BluetoothTscPrinter: {isBluetoothTscPrinter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
