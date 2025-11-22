import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Perfil from '../pages/Perfil';
import Favoritos from '../pages/Favoritos';
import Admin from '../pages/Admin';
import Cursos from '../pages/Cursos';
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StackFavoritos" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackAdmin" component={Admin} />
        <Stack.Screen name="StackHome" component={Home} />
        <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="StackPerfil" component={Perfil} />
        <Stack.Screen name="StackFavoritos" component={Favoritos} />
        <Stack.Screen name="StackCursos" component={Cursos} />
        <Stack.Screen name="StackCaes" component={Caes} />
        <Stack.Screen name="StackGatos" component={Gatos} />
        <Stack.Screen name="StackFilhotes" component={Filhotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}