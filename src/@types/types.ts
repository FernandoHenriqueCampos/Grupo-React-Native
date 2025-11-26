export type Animal = {
    id: string | number;
    nome: string;
    raca: string;
    image?: string;
    idade?: string;
    cor?: string;
    peso?: number | string;
    porte?: string;
    genero?: string;
    tipo?: string;
    tipoModal: 'criar' | 'editar';
};

export interface Usuario {
    id?: string;
    nome: string;
    email: string;
    senha: string;
    perfil: 'user' | 'admin';
}

export type RootStackParamList = {
    StackLogin: undefined;
    StackAdmin: undefined;
    StackHome: undefined;
    StackCadastro: undefined;
    StackPerfil: undefined;
    StackFavoritos: undefined;
    StackCursos: undefined;
    StackCaes: undefined;
    StackGatos: undefined;
    StackFilhotes: undefined;
    StackTermoAdocao: undefined;
    MyTabs: undefined;
    Home: undefined;
    Favoritos: undefined;
    Perfil: undefined;
    Shop: undefined;
};

export type RootTabParamList = {
    Home: undefined;
    Favoritos: undefined;
    Perfil: undefined;
    Shop: undefined;
}

export interface FavoritesContextType {
    favoritePetIds: string[];
    toggleFavorite: (petId: string) => void;
    removeFavorite: (petId: string) => void;
    isFavorite: (petId: string) => boolean;
    isReady: boolean;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList, RootTabParamList { }
    }
}