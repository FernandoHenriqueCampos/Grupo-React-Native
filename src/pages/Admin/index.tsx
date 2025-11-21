import { View, Text, FlatList, Modal } from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import CardAdminPet from '../../components/CardAdminPet';
import ModalEditarAdmin from '../../components/ModalEditarAdmin';
import { api } from "../../service/api";
import { useState } from 'react';

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

    function abrirModal(animal: Animal) {
        setAnimalSelecionado(animal);
        setModalOpen(true);
    }

    function atualizarLista(animalAtualizado: Animal) {
        setAnimais(prev =>
            prev.map(item =>
                item.id === animalAtualizado.id ? animalAtualizado : item
            )
        );
    }

        } catch (error) {
            console.log("Erro ao atualizar:", error);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin</Text>

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
                            handleEdit={() => abrirModal(item)}
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
                <ModalEditarAdmin
                    animal={animalSelecionado}
                    onClose={() => setModalOpen(false)}
                    onUpdate={atualizarLista}
                />
            </Modal>
        </View>
    );
}
