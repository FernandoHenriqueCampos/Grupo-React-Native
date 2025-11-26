import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedLoadingScreen from './../pages/LoadingScreen';
import { RootStackParamList } from '../@types/types';
import { MyTabs } from './bottomTabs';
import Cadastro from '../pages/Cadastro';
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';
import { TermoDeAdocao } from '../pages/TermoAdocao';
import { useUser } from '../context/UserContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function InitialStack() {
  const [isLoading, setIsLoading] = useState(true);

  const { usuarioLogado } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnimatedLoadingScreen />;
  }

  const RotaInicial: keyof RootStackParamList = usuarioLogado ? 'MyTabs' : 'StackLogin';

  return (
    <Stack.Navigator initialRouteName={RotaInicial} screenOptions={{ headerShown: false }}>
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
      <InitialStack />
    </NavigationContainer>
  );
}