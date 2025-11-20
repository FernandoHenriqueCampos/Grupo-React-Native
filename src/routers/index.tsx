import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro'; 
import Perfil from '../pages/Perfil';
import Favoritos from '../pages/Favoritos';

const Stack = createNativeStackNavigator();

export const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackHome" component={Home} />
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="StackPerfil" component={Perfil} />
        <Stack.Screen name="StackFavoritos" component={Favoritos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
