import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserContextProps = {
  usuarioLogado: boolean;
  idUsuarioLogado: string | null;
  setUsuarioLogado: (valor: boolean) => void;
  setIdUsuarioLogado: (id: string | null) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuarioLogado, setUsuarioLogadoState] = useState(false);
  const [idUsuarioLogado, setIdUsuarioLogadoState] = useState<string | null>(null);

  useEffect(() => {
    async function loadStorage() {
      const logado = await AsyncStorage.getItem("usuarioLogado");
      const id = await AsyncStorage.getItem("idUsuarioLogado");

      if (logado === "true") {
        setUsuarioLogadoState(true);
      }

      if (id) {
        setIdUsuarioLogadoState(id);
      }
    }

    loadStorage();
  }, []);

  function logout() {
    setUsuarioLogado(false);
    setIdUsuarioLogado(null);
  }

  const setUsuarioLogado = async (valor: boolean) => {
    setUsuarioLogadoState(valor);
    await AsyncStorage.setItem("usuarioLogado", valor ? "true" : "false");
  };

  const setIdUsuarioLogado = async (id: string | null) => {
    setIdUsuarioLogadoState(id);
    if (id) {
      await AsyncStorage.setItem("idUsuarioLogado", id);
    } else {
      await AsyncStorage.removeItem("idUsuarioLogado");
    }
  };

  return (
    <UserContext.Provider value={{
      usuarioLogado,
      idUsuarioLogado,
      setUsuarioLogado,
      setIdUsuarioLogado,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
