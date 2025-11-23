import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import Perfil from '../pages/Perfil';
import Admin from '../pages/Admin';
import Cursos from '../pages/Cursos';
import { Favoritos } from '../pages/Favoritos';
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="StackCaes" component={Caes} />
      <Stack.Screen name="StackGatos" component={Gatos} />
      <Stack.Screen name="StackFilhotes" component={Filhotes} />
    </Stack.Navigator>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabHome" component={HomeStack} />
      <Tab.Screen name="TabCursos" component={Cursos} />
      <Tab.Screen name="TabFavoritos" component={Favoritos} />
      <Tab.Screen name="TabPerfil" component={Perfil} />
      <Tab.Screen name="TabAdmin" component={Admin} />
    </Tab.Navigator>
  );
}
