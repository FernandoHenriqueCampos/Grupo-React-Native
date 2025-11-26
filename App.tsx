import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routers/index';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { UserProvider } from './src/context/UserContext';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <UserProvider>
        <FavoritesProvider>
          <StatusBar style="auto" />
          <Routers />
        </FavoritesProvider>
      </UserProvider>
    </CartProvider>
  );
}