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
import { CurrencySelector } from '@/components/CurrencySelector';
import { CurrencyCode } from '@/constants/currencies';
import { sanitizeNumericInput } from '@/utils/sanitizers';

export default function HomeScreen() {
  const [weeklyRent, setWeeklyRent] = useState('');
  const [transportCost, setTransportCost] = useState(0);
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');

// 1. Defina a taxa
  const EXCHANGE_RATE = 7.30;

  // 2. Calcule o valor mensal sempre em números (Number) para não dar erro no formatValue
  // Se o campo estiver vazio, o valor é 0
  const monthlyRentNumber = weeklyRent ? (parseFloat(weeklyRent) * 52 / 12) : 0;
  
  // O transporte já é um número (transportCost), então calculamos direto
  const monthlyTransportNumber = (transportCost * 52 / 12);

  // 3. A função de formatar (garantindo que ela recebe um número)
  const formatValue = (valueInGbp: number) => {
    if (currency === 'BRL') {
      return `R$ ${(valueInGbp * EXCHANGE_RATE).toFixed(2)}`;
    }
      return `£ ${valueInGbp.toFixed(2)}`;
  };
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
            <CurrencySelector 
            label="Moeda de Origem"
            selectedCurrency={currency}
            onSelect={(code) => setCurrency(code)}
          />
          
          {/* SEÇÃO: ALUGUEL */}
          <Text style={styles.label}>Weekly Rent (£):</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 400"
            keyboardType="numeric"
            onChangeText={(text) =>{
              const safeText = sanitizeNumericInput(text);
              setWeeklyRent(safeText);
            }}
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
            <Text style={styles.resultValue}>{formatValue(monthlyRentNumber)}</Text>
          </View>

          {/* O Botão Clear entra logo aqui embaixo */}
          {weeklyRent.length > 0 && (
            <TouchableOpacity 
              onPress={() => {
                setWeeklyRent(''); 
                setTransportCost(0);
              }}
              style={styles.resultClearButton}
              activeOpacity={0.7} // Feedback visual de toque
            >
              <Text style={styles.resultClearButtonText}>Clear Calculation</Text>
            </TouchableOpacity>
          )}

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
            <Text style={styles.resultValueSmall}>{formatValue(monthlyTransportNumber)}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}