import { View, Text, FlatList, Modal } from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { api } from "../../services/api";
import CardAdminPet from '../../components/CardAdminPet';
import ModalAdmin from '../../components/ModalAdmin';
import Button from '../../components/Button';
import { Header } from '../../components/Header';

export default function Admin() {

    const [animais, setAnimais] = useState<Animal[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [animalSelecionado, setAnimalSelecionado] = useState<Animal | null>(null);

    type Animal = {
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

    async function deleteAnimais(id: string | number) {
        try {
            const response = await api.delete(`animais/${id}`);
            setAnimais(prev => prev.filter(item => item.id !== id));

            console.log("Deletado:", response.data);
        } catch (error) {
            console.log("Erro ao deletar:", error);
        }
    }

    async function getAnimais() {
        try {
            const response = await api.get("animais"); 
            setAnimais(response.data);

        } catch (error) {
            console.log("Erro ao buscar animais:", error);
        }
    }

    useEffect(() => {
        getAnimais();
    }, []);

    function abrirModalCriar() {
        setAnimalSelecionado({
            id: "",
            nome: "",
            raca: "",
            idade: "",
            cor: "",
            peso: "",
            porte: "",
            genero: "",
            tipo: "",
            tipoModal: "criar"
        });

        setModalOpen(true);
    }


    function abrirModalEditar(animal: Animal) {
        setAnimalSelecionado({
            ...animal,
            tipoModal: "editar"
        });

        setModalOpen(true);
    }

    function atualizarLista(animalAtualizado: Animal) {
        setAnimais(prev => {
            const existe = prev.some(item => item.id === animalAtualizado.id);

            if (existe) {
                return prev.map(item =>
                    item.id === animalAtualizado.id ? animalAtualizado : item
                );
            }

            return [animalAtualizado, ...prev];
        });
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.header}>
                <Text style={styles.title}>Animais</Text>
                <Button
                    title="Novo animal"
                    onPress={() => { abrirModalCriar() }}
                    backgroundColor="#8A2BE2"
                    color="#ffffffff"
                />
            </View>

            <FlatList
                style={styles.flatList}
                data={animais}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.containerAdminPet}>
                        <CardAdminPet
                            name={item.nome}
                            race={item.raca}
                            image={item.image}
                            handleEdit={() => abrirModalEditar(item)}
                            handleDelete={() => deleteAnimais(item.id)}
                        />
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />

            <Modal
                visible={modalOpen}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalOpen(false)}
            >
                <ModalAdmin
                    animal={animalSelecionado}
                    onClose={() => setModalOpen(false)}
                    onUpdate={atualizarLista}
                />
            </Modal>
        </View>
    );
}
