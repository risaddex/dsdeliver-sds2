import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/Routes';
import "intl";
import { Platform } from "react-native";

if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
    let [fontsLoaded] = useFonts({
      OpenSans_700Bold,
      OpenSans_400Regular
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
