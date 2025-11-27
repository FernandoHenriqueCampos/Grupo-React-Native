import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './style';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../@types/types';
import { RootTabParamList } from '../@types/types';
import { Home } from '../pages/Home';
import Perfil from '../pages/Perfil';
import { Favoritos } from '../pages/Favoritos';
import { Caes } from '../pages/Caes';
import { Gatos } from '../pages/Gatos';
import { Filhotes } from '../pages/Filhotes';
import ShopScreen from '../pages/Shop';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackHome" component={Home} />
      <Stack.Screen name="StackCaes" component={Caes} />
      <Stack.Screen name="StackGatos" component={Gatos} />
      <Stack.Screen name="StackFilhotes" component={Filhotes} />
    </Stack.Navigator>
  );
}

export function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          ...styles.tabBar,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: "#8A2BE2",
        },

        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffffa4",

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Favoritos":
              iconName = "heart";
              break;
            case "Perfil":
              iconName = "person";
              break;
            case "Shop":
              iconName = "cart";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}


//Uma ameaça foi detectada. Felipe o VASCAÍNO!
