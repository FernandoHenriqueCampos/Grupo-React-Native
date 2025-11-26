import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import { Header } from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />

      <View style={styles.card}>
        <Text style={styles.title}>Sobre o Projeto</Text>

        <Text style={styles.text}>
          Nosso aplicativo foi criado com o propósito de facilitar o processo de
          adoção de animais, conectando pessoas que desejam oferecer um novo lar
          com pets que precisam de carinho e segurança.
        </Text>

        <Text style={[styles.text, { marginTop: 10 }]}>
          Aqui, buscamos tornar a adoção mais rápida, acessível e responsável,
          garantindo que cada animal encontre uma família preparada para oferecer
          amor e cuidado.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Nossa Missão</Text>

        <Text style={styles.text}>
          • Promover a adoção consciente{"\n"}
          • Facilitar o contato entre adotantes e abrigos{"\n"}
          • Conscientizar sobre a importância do cuidado animal{"\n"}
          • Reduzir o abandono e o sofrimento dos pets
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Quem Somos</Text>

        <Text style={styles.text}>
          Somos um grupo apaixonado por tecnologia e pelo bem-estar animal, e
          desenvolvemos este projeto com dedicação para contribuir com uma causa
          tão importante para a sociedade.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Ionicons name="paw-outline" size={28} color="#FFF" />
          <Ionicons name="heart-outline" size={28} color="#FFF" />
          <Ionicons name="people-outline" size={28} color="#FFF" />
        </View>

        <Text style={styles.footerText}>
          Desenvolvido por:{"\n"}
          Fernando Henrique, João Menezes, Jessé, Miguel e Gelversom.
        </Text>
      </View>
    </ScrollView>
  );
}