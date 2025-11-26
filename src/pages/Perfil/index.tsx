import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import styles from "./style";
import { useUser } from "../../context/UserContext";
import { apiUsuarios } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

interface OpcaoItem {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
}

export default function Perfil() {
  const [image, setImage] = useState<string | null>(null);
  const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();
  const { idUsuarioLogado, logout } = useUser();

  async function getUsuario() {
    try {
      const response = await apiUsuarios.get("/usuarios");
      const usuarios = response.data;

      if (Array.isArray(usuarios)) {
        const usuarioEncontrado = usuarios.find(
          (u: any) => u.id === idUsuarioLogado
        );
        setNomeUsuario(usuarioEncontrado ? usuarioEncontrado.nome : "Usuário não encontrado");
      } else {
        if (usuarios.id === idUsuarioLogado) {
          setNomeUsuario(usuarios.nome);
        }
      }
    } catch (error) {
      console.log("Erro ao buscar usuario:", error);
    }
  }

  useEffect(() => {
    if (idUsuarioLogado) {
      getUsuario();
    }
  }, [idUsuarioLogado]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão necessária", "Habilite o acesso às imagens.");
      }
    })();
  }, []);

  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir a galeria.");
    }
  }

  const opcoes: OpcaoItem[] = [
    { id: "1", 
      label: "Atualizar Perfil", 
      icon: "edit" },
    { id: "2", 
      label: "Alterar Senha", 
      icon: "lock" },
    { id: "3", 
      label: "Cursos", 
      icon: "book",
      onPress: () => {
        navigation.navigate("StackCursos" as never);
      },
    },
    { id: "4", 
      label: "Admin", 
      icon: "settings",
      onPress: () => {
        navigation.navigate("StackAdmin" as never);
      },
    },
    { id: "5", 
      label: "Sobre", 
      icon: "info-outline" },
    {
      id: "6",
      label: "Sair da Conta",
      icon: "logout",
      onPress: () => {
        logout(); 
        navigation.navigate("StackLogin" as never); 
      },
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity
        style={[
          styles.imageContainer,
          { width: screenWidth * 0.4, height: screenWidth * 0.4 },
        ]}
        onPress={pickImage}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={40} color="#777" />
        )}
      </TouchableOpacity>

      <Text style={styles.userName}>{nomeUsuario}</Text>

      <View style={{ width: "100%", paddingHorizontal: 20 }}>
        {opcoes.map((item) => {
          const Wrapper = item.onPress ? TouchableOpacity : View;

          return (
            <Wrapper
              key={item.id}
              style={styles.optionContainer}
              onPress={item.onPress}
              activeOpacity={0.6}
            >
              <Text style={styles.optionText}>{item.label}</Text>

              {item.icon === "edit" && <Feather name="edit" size={24} />}
              {item.icon === "lock" && <Feather name="lock" size={24} />}
              {item.icon === "book" && <Feather name="book" size={24} />}
              {item.icon === "settings" && <Feather name="settings" size={24} />}
              {item.icon === "info-outline" && (
                <Ionicons name="information-circle-outline" size={26} />
              )}
              {item.icon === "logout" && (
                <MaterialIcons name="logout" size={26} color="red" />
              )}
            </Wrapper>
          );
        })}
      </View>
    </ScrollView>
  );
}
