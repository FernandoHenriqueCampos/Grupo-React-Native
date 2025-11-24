import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const TermoDeAdocao = () => {
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
      
      {/* Aqui você pode adicionar um componente Line/Divider */}
      <Text style={styles.separador}>---</Text>

      <Text style={styles.tituloSecundario}>CUIDADOS ESSENCIAIS COM O NOVO MEMBRO DA FAMÍLIA</Text>

      <Text style={styles.lista}>
        * Identificação: Mantenha o animal sempre com coleira e plaquinha de identificação.{"\n"}
        * Alimentação: Ofereça ração de qualidade e na quantidade correta. Evite dar comida humana tóxica.{"\n"}
        * Ambiente: Garanta um ambiente limpo, seguro e livre de riscos.{"\n"}
        * Passeios/Exercícios: Proporcione exercícios diários e passeios (sempre com coleira e guia).{"\n"}
        * Paciência: Lembre-se que a adaptação pode levar tempo. Seja paciente e amoroso(a).
      </Text>

      <View style={styles.checkboxContainer}>
        {/* O componente CheckBox deve ser implementado por você, use importações como CheckBox ou TouchableOpacity com ícone */}
        {/* <CheckBox value={isChecked} onValueChange={setIsChecked} /> */}
        <Text style={styles.label}>
          Declaro que li e concordo com todos os termos e compromissos acima, responsabilizando-me integralmente pelo bem-estar do animal que desejo adotar.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tituloSecundario: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  paragrafo: {
    marginBottom: 8,
    lineHeight: 20,
  },
  separador: {
    marginVertical: 10,
    textAlign: 'center',
  },
  lista: {
    marginBottom: 10,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  label: {
    marginLeft: 8,
    flexShrink: 1, // Permite que o texto quebre linha
  },
});

export default TermoDeAdocao;