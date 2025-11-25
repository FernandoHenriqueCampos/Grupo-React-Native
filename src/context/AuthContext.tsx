import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUsuarios } from '../services/api';
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
            const response = await apiUsuarios.get<Usuario[]>('/usuarios');
            const usuarios = response.data;

            const usuarioEncontrado = usuarios.find(
                (usuario) => usuario.email === email && usuario.senha === senha
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