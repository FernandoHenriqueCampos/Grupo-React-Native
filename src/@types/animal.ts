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