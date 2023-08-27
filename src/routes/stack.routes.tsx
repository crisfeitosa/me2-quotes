import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CredentialsContext } from '../Providers/CredentialsContext';

import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
          >
          {storedCredentials ? (
            <>
              <Stack.Screen name='Welcome' component={TabRoutes} /> 
              <Stack.Screen name='Profile' component={TabRoutes} /> 
            </>
            ) : (
            <>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Signup' component={Signup} />
            </>
          )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  )
}

export default StackRoutes;
