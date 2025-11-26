import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routers/index';
import { FavoritesProvider } from './src/context/FavoritesContext'; 
import { UserProvider } from './src/context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <StatusBar style="auto" />
        <Routers />
      </FavoritesProvider>
    </UserProvider>
  );
}