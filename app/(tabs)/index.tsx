import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './index.styles';

export default function HomeScreen() {
  const [weeklyRent, setWeeklyRent] = useState('');
  const monthlyRent = weeklyRent 
    ? (parseFloat(weeklyRent) * 52 / 12).toFixed(2) 
    : '0.00';

  const [transportCost, setTransportCost] = useState(0);

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

      <Text style={styles.label}>Weekly Transport (Oyster Cap):</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.zoneButton, transportCost === 42.7 && styles.zoneButtonActive]} 
          onPress={() => setTransportCost(42.7)}
        >
          <Text style={transportCost === 42.7 ? styles.zoneTextActive : styles.zoneText}>Z1-2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.zoneButton, transportCost === 50 && styles.zoneButtonActive]} 
          onPress={() => setTransportCost(50)}
        >
          <Text style={transportCost === 50 ? styles.zoneTextActive : styles.zoneText}>Z1-3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.zoneButton, transportCost === 61.2 && styles.zoneButtonActive]} 
          onPress={() => setTransportCost(61.2)}
        >
          <Text style={transportCost === 61.2 ? styles.zoneTextActive : styles.zoneText}>Z1-4</Text>
        </TouchableOpacity>
      </View>

      {/* Resultado do Transporte Mensal */}
      <View style={styles.transportResult}>
        <Text style={styles.resultLabel}>Monthly Transport:</Text>
        <Text style={styles.resultValueSmall}>£ {(transportCost * 52 / 12).toFixed(2)}</Text>
      </View>

    </View>
  );
}





