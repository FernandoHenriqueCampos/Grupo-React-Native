import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import Perfil from '../pages/Perfil';
import Favoritos from '../pages/Favoritos';
import Admin from '../pages/Admin';
import Cursos from '../pages/Cursos';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabFavoritos" component={Favoritos} />
      <Tab.Screen name="TabCursos" component={Cursos} />
      <Tab.Screen name="TabPerfil" component={Perfil} />
      <Tab.Screen name="TabAdmin" component={Admin} />
    </Tab.Navigator>
  );
}
