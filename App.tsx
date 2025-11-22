import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routers/index';
import { FavoritesProvider } from './src/context/FavoritesContext';

export default function App() {

  return (
    <FavoritesProvider>
      <StatusBar style="auto" />
      <Routers />
    </FavoritesProvider>
  );
}
