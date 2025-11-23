import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/Types';

import { MyTabs } from './bottomTabs';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{ headerShown: false }}
      >

        {/* Telas SEM bottom tabs */}
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackCadastro" component={Cadastro} />

        {/* Telas COM bottom tabs */}
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
