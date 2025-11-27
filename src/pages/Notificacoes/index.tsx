import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

type Notificacao = {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const notificacoes: Notificacao[] = [
  {
    id: "1",
    titulo: "Adoção confirmada!",
    descricao: "Parabéns! O cachorro Thor agora faz parte da sua família ❤️",
    data: "Hoje às 14:32",
    icon: "paw-outline",
  },
  {
    id: "2",
    titulo: "Curso liberado",
    descricao: "Seu curso gratuito de programação React Native está disponível.",
    data: "Hoje às 10:12",
    icon: "school-outline",
  },
  {
    id: "3",
    titulo: "Nova recomendação",
    descricao:
      "Encontramos um pet que combina com seu perfil. Veja o no app!",
    data: "Ontem às 19:20",
    icon: "sparkles-outline",
  },
  {
    id: "4",
    titulo: "Promoção na loja!",
    descricao: "Brinquedos e acessórios com até 40% OFF!",
    data: "23 Nov às 16:40",
    icon: "pricetag-outline",
  },
];

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>

      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name={item.icon} size={28} color="#6C47FF" />

            <View style={styles.textos}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardDescricao}>{item.descricao}</Text>
              <Text style={styles.cardData}>{item.data}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
