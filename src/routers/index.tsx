import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import { RootStackParamList } from '../@types/types';

import { Home } from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Perfil from '../pages/Perfil';
import  Favoritos  from '../pages/Favoritos';
import Admin from '../pages/Admin';
import Cursos from '../pages/Cursos';
=======
import AnimatedLoadingScreen from './../pages/LoadingScreen';
import { RootStackParamList } from '../@types/types';
import { MyTabs } from './bottomTabs';
import Cadastro from '../pages/Cadastro';
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';
import { TermoDeAdocao } from '../pages/TermoAdocao';

const Stack = createNativeStackNavigator<RootStackParamList>();

function InitialStack() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnimatedLoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackCadastro" component={Cadastro} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="StackCaes" component={Caes} />
      <Stack.Screen name="StackGatos" component={Gatos} />
      <Stack.Screen name="StackFilhotes" component={Filhotes} />
      <Stack.Screen name="StackCursos" component={Cursos} />
      <Stack.Screen name="StackTermoAdocao" component={TermoDeAdocao} />
    </Stack.Navigator>
  );
}


export function Routers() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="StackHome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="StackHome" component={Home} />
        <Stack.Screen name="StackAdmin" component={Admin} />
        <Stack.Screen name="StackPerfil" component={Perfil} />
        <Stack.Screen name="StackFavoritos" component={Favoritos} />
        <Stack.Screen name="StackCursos" component={Cursos} />
        <Stack.Screen name="StackCaes" component={Caes} />
        <Stack.Screen name="StackGatos" component={Gatos} />
        <Stack.Screen name="StackFilhotes" component={Filhotes} />
      </Stack.Navigator>
=======
      <InitialStack />
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814
    </NavigationContainer>
  );
}