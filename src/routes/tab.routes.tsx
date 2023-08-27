import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feather, Entypo, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { AddQuote } from '../screens/AddQuote';
import { Profile } from '../screens/Profile';
import ButtonNewTabBar from '../components/ButtonNewTabBar';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          tabBarLabel: 'Início',
          tabBarActiveTintColor: '#6D28D9',
          tabBarInactiveTintColor: '#E5E7EB',
        }}
      />
      <Tab.Screen
        name='Add'
        component={AddQuote}
        options={{
          tabBarIcon: ({ color, size }) => <ButtonNewTabBar color={color} size={size} />,
          tabBarLabel: '',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name="person" color={color} size={size} />,
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: '#6D28D9',
          tabBarInactiveTintColor: '#E5E7EB',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;