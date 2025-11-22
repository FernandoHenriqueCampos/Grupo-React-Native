
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // Abre da parte inferior
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '90%', // Altura máxima para não cobrir tudo
  },
  petImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  petName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  scrollContent: {
    width: '100%',
    paddingBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    color: '#777',
    lineHeight: 22,
  },
  adoptButton: {
    backgroundColor: '#FF7A00', // Laranja do mockup
    borderRadius: 8,
    padding: 15,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  adoptButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});