import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/types';
import { MyTabs } from './bottomTabs';
import Cadastro from '../pages/Cadastro';
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="StackCaes" component={Caes} />
        <Stack.Screen name="StackGatos" component={Gatos} />
        <Stack.Screen name="StackFilhotes" component={Filhotes} />
        <Stack.Screen name="StackCursos" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}