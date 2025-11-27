import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/types';
import { styles } from './style';

type Props = NativeStackScreenProps<RootStackParamList, 'StackTermoAdocao'>;

export const TermoDeAdocao = ({ navigation }: Props) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setIsAgreed(!isAgreed);
  };
  const handleConfirmAdoption = () => {
    if (isAgreed) {
      console.log('Adoção confirmada. Abrindo modal de curso.');

      setModalVisible(true);
    }
  };

  const goToCourses = () => {
    setModalVisible(false);
    navigation.navigate('StackCursos');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>TERMO DE RESPONSABILIDADE E COMPROMISSO DE ADOÇÃO</Text>

        <Text style={styles.paragrafo}>
          Ao prosseguir com a adoção, você assume total responsabilidade pelo bem-estar e saúde do animal. Isso inclui prover um lar seguro, alimentação adequada, água fresca e abrigo. É fundamental garantir que o animal receba afeto e atenção para um desenvolvimento saudável.
        </Text>

        <Text style={styles.paragrafo}>
          Você se compromete a fornecer os cuidados veterinários necessários e regulares. Isso abrange manter as vacinas e vermifugações em dia, realizar consultas de rotina e buscar atendimento médico imediato em casos de doença. O animal adotado deve ser castrado(a) (se já não for) no prazo recomendado, visando o controle populacional e a saúde do pet.
        </Text>

        <Text style={styles.paragrafo}>
          Você declara que possui as condições físicas e financeiras para manter o animal por toda a sua vida. É proibido utilizar o animal para procriação, abandono, maus-tratos ou repasse a terceiros sem consentimento. A organização tem o direito de realizar visitas de acompanhamento.
        </Text>

        <Text style={styles.separador}>--------------------------------</Text>

        <Text style={styles.tituloSecundario}>CUIDADOS ESSENCIAIS COM O NOVO MEMBRO DA FAMÍLIA</Text>

        <Text style={styles.lista}>
          * Identificação: Mantenha o animal sempre com coleira e plaquinha de identificação.{"\n"}
          * Alimentação: Ofereça ração de qualidade e na quantidade correta. Evite dar comida humana tóxica.{"\n"}
          * Ambiente: Garanta um ambiente limpo, seguro e livre de riscos.{"\n"}
          * Passeios/Exercícios: Proporcione exercícios diários e passeios (sempre com coleira e guia).{"\n"}
          * Paciência: Lembre-se que a adaptação pode levar tempo. Seja paciente e amoroso(a).
        </Text>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handlePress}
            activeOpacity={0.7}
          >
            <Text style={styles.checkboxIcon}>
              {isAgreed ? '☑' : '☐'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>
            Declaro que li e concordo com todos os termos e compromissos acima, responsabilizando-me integralmente pelo bem-estar do animal que desejo adotar.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: isAgreed ? 1 : 0.5 }]}
          disabled={!isAgreed}
          onPress={handleConfirmAdoption}
        >
          <Text style={styles.buttonText}>Confirmar Adoção</Text>
        </TouchableOpacity>

      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Parabéns!</Text>
            <Text style={styles.modalText}>
              Como forma de agradecimento pelo seu compromisso com a adoção responsável, você ganhou acesso gratuito ao nosso Curso para Programadores!
            </Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={goToCourses}
            >
              <Text style={styles.buttonText}>Acessar Meu Curso Gratuito</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};