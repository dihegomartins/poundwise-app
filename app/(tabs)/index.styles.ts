import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1A1A1A',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  resultLabel: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },
  resultValue: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },

clearButton: {
  marginTop: -10,
  marginBottom: 20,
  alignItems: 'flex-end',
},
clearButtonText: {
  color: '#007AFF', // Cor azul padrão do iOS
  fontSize: 14,
},

buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  zoneButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    width: '30%',
    alignItems: 'center',
  },
  zoneButtonActive: {
    backgroundColor: '#1A1A1A',
    borderColor: '#1A1A1A',
  },
  zoneText: {
    color: '#333',
    fontWeight: '600',
  },
  zoneTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  transportResult: {
    backgroundColor: '#333', // Um cinza mais claro para diferenciar do aluguer
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  resultValueSmall: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  scrollContainer: {
    flexGrow: 1, // Importante para o ScrollView ocupar a tela toda
    backgroundColor: '#F5F5F5',
  },
});