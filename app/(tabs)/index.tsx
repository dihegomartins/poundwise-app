import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { styles } from './index.styles';
import { TFL_WEEKY_CAPS } from '@/constants/Transport'; 

export default function HomeScreen() {
  const [weeklyRent, setWeeklyRent] = useState('');
  const [transportCost, setTransportCost] = useState(0);

  const monthlyRent = weeklyRent 
    ? (parseFloat(weeklyRent) * 52 / 12).toFixed(2) 
    : '0.00';

  const monthlyTransport = (transportCost * 52 / 12).toFixed(2);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>PoundWise</Text>
          
          {/* SEÇÃO: ALUGUEL */}
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

          {/* SEÇÃO: TRANSPORTE */}
          <Text style={styles.label}>Weekly Transport (Oyster Cap):</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.zoneButton, transportCost === TFL_WEEKY_CAPS.ZONE_1_2 && styles.zoneButtonActive]} 
              onPress={() => setTransportCost(TFL_WEEKY_CAPS.ZONE_1_2)}
            >
              <Text style={transportCost === TFL_WEEKY_CAPS.ZONE_1_2 ? styles.zoneTextActive : styles.zoneText}>Z1-2</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.zoneButton, transportCost === TFL_WEEKY_CAPS.ZONE_1_3 && styles.zoneButtonActive]} 
              onPress={() => setTransportCost(TFL_WEEKY_CAPS.ZONE_1_3)}
            >
              <Text style={transportCost === TFL_WEEKY_CAPS.ZONE_1_3 ? styles.zoneTextActive : styles.zoneText}>Z1-3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.zoneButton, transportCost === TFL_WEEKY_CAPS.ZONE_1_4 && styles.zoneButtonActive]} 
              onPress={() => setTransportCost(TFL_WEEKY_CAPS.ZONE_1_4)}
            >
              <Text style={transportCost === TFL_WEEKY_CAPS.ZONE_1_4 ? styles.zoneTextActive : styles.zoneText}>Z1-4</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transportResult}>
            <Text style={styles.resultLabel}>Monthly Transport:</Text>
            <Text style={styles.resultValueSmall}>£ {monthlyTransport}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}