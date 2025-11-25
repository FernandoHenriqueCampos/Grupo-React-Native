import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import styles from "./style";

interface OpcaoItem {
  id: string;
  label: string;
  icon: string;
}

export default function Perfil() {
  const [image, setImage] = useState<string | null>(null);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
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
    { id: "1", label: "Atualizar Perfil", icon: "edit" },
    { id: "2", label: "Alterar Senha", icon: "lock" },
    { id: "3", label: "Notificações", icon: "notifications" },
    { id: "4", label: "Ajuda / Suporte", icon: "chat-bubble-outline" },
    { id: "5", label: "Sobre", icon: "info-outline" },
    { id: "6", label: "Sair da Conta", icon: "logout" },
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

      <Text style={styles.userName}>Seu Nome Aqui</Text>

      <View style={{ width: "100%", paddingHorizontal: 20 }}>
        {opcoes.map((item) => (
          <View key={item.id} style={styles.optionContainer}>
            <Text style={styles.optionText}>{item.label}</Text>

            {item.icon === "edit" && <Feather name="edit" size={24} />}
            {item.icon === "lock" && <Feather name="lock" size={24} />}
            {item.icon === "notifications" && (
              <Ionicons name="notifications-outline" size={25} />
            )}
            {item.icon === "chat-bubble-outline" && (
              <Ionicons name="chatbubble-ellipses-outline" size={25} />
            )}
            {item.icon === "info-outline" && (
              <Ionicons name="information-circle-outline" size={26} />
            )}
            {item.icon === "logout" && (
              <MaterialIcons name="logout" size={26} color="red" />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}