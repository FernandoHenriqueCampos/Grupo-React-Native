import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { api } from '../services/api';
import { Usuario } from '../@types/types';

interface AuthContextData {
    signed: boolean;
    user: Usuario | null;
    loading: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            try {
                const storageUser = await AsyncStorage.getItem('@PetApp:user');

                if (storageUser) {
                    setUser(JSON.parse(storageUser));
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        loadStorageData();
    }, []);

    async function signIn(email: string, senha: string) {
        try {
            const response = await api.get<Usuario[]>('/usuario');
            const usuarios = response.data;

            const usuarioEncontrado = usuarios.find(
                (u) => u.email === email && u.senha === senha
            );

            if (usuarioEncontrado) {
                setUser(usuarioEncontrado);
                await AsyncStorage.setItem('@PetApp:user', JSON.stringify(usuarioEncontrado));
            } else {
                throw new Error('E-mail ou senha incorretos.');
            }

        } catch (error) {
            throw error;
        }
    }

    async function signOut() {
        await AsyncStorage.removeItem('@PetApp:user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}