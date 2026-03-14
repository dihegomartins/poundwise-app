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
import { CURRENCIES } from '@/constants/currencies';

export default function HomeScreen() {
  const [weeklyRent, setWeeklyRent] = useState('');
  const [transportCost, setTransportCost] = useState(0);
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');


const EXCHANGE_RATE = 7.30;

  // 1. Primeiro, descobrimos quanto vale a SEMANA na moeda oposta
  const weeklyInOtherCurrency = weeklyRent 
    ? (currency === 'BRL' 
        ? parseFloat(weeklyRent) / EXCHANGE_RATE 
        : parseFloat(weeklyRent) * EXCHANGE_RATE)
    : 0;

  // 2. Agora calculamos o MÊS já na moeda convertida
  const monthlyConverted = (weeklyInOtherCurrency * 52 / 12).toFixed(2);

  // 3. O transporte continua igual
  const monthlyTransport = (transportCost * 52 / 12).toFixed(2);

  // 4. A função de formatar agora só coloca o símbolo certo
  const formatValue = (valueString: string, isTransport = false) => {
    const value = parseFloat(valueString);

    if (isTransport) {
      return currency === 'BRL' 
        ? `R$ ${(value * EXCHANGE_RATE).toFixed(2)}` 
        : `£ ${value.toFixed(2)}`;
    }

    // Se a moeda de ORIGEM é BRL, o resultado é em GBP
    return currency === 'BRL' ? `£ ${valueString}` : `R$ ${valueString}`;
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
            <Text style={styles.label}>
              Weekly Rent ({CURRENCIES[currency].symbol}):
            </Text>

            <TextInput
            style={styles.input}
            placeholder={currency === 'BRL' ? "e.g. 3000" : "e.g. 400"}
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
            <Text style={styles.resultValue}>{formatValue(monthlyConverted)}</Text>
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
            <Text style={styles.resultValueSmall}>{formatValue(monthlyTransport, true)}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}