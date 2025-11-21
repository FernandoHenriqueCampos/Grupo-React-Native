export type RootStackParamList = {
    StackLogin: undefined;
    StackCadastro: undefined;
    StackHome: undefined;
};

export interface Usuario {
    id?: string;
    nome: string;
    email: string;
    senha: string;
    perfil: 'user' | 'admin';
}