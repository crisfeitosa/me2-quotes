import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import StackRoutes from './src/routes/stack.routes';

import themes from './src/themes';
import { CredentialsContext } from './src/Providers/CredentialsContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const [appIsReady, setAppIsReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');

  const colorStyleStatusBar = colorScheme === 'light' ? 'dark' : 'light';
  const theme = themes[colorScheme] || themes.light;

  const checkLoginCredentials = () => {
    AsyncStorage
      .getItem('@quotesCredentials')
      .then((result) => {
        if (result !== null) {
          return setStoredCredentials(JSON.parse(result));
        } 
        return setStoredCredentials('');
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    async function prepare() {
      try {
        checkLoginCredentials();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <ThemeProvider theme={theme}>
        <StatusBar style={colorStyleStatusBar} />
        <StackRoutes />
      </ThemeProvider>
    </CredentialsContext.Provider>
  );
}
