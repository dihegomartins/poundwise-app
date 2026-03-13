import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [weeklyRent, setWeeklyRent] = useState('');
  const monthlyRent = weeklyRent 
    ? (parseFloat(weeklyRent) * 52 / 12).toFixed(2) 
    : '0.00';


return (
    <View style={styles.container}>
      <Text style={styles.title}>PoundWise</Text>
      
      <Text style={styles.label}>Weekly Rent (£):</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 400"
        keyboardType="numeric"
        onChangeText={(text) => setWeeklyRent(text)}
        value={weeklyRent}
      />
      <TouchableOpacity 
        style={styles.clearButton} 
        onPress={() => setWeeklyRent('')}
      >
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
      
      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Monthly Equivalent:</Text>
        <Text style={styles.resultValue}>£ {monthlyRent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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


});




