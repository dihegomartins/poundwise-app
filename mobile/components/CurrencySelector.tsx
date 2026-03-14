// mobile/components/CurrencySelector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CURRENCIES, CurrencyCode } from '../constants/currencies';

interface Props {
  selectedCurrency: CurrencyCode;
  onSelect: (code: CurrencyCode) => void;
  label: string;
}

export function CurrencySelector({ selectedCurrency, onSelect, label }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonGroup}>
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
          <TouchableOpacity
            key={code}
            style={[
              styles.button,
              selectedCurrency === code && styles.buttonSelected,
            ]}
            onPress={() => onSelect(code)}
          >
            <Text style={styles.flag}>{CURRENCIES[code].flag}</Text>
            <Text 
              style={[
                styles.buttonText, 
                selectedCurrency === code && styles.buttonTextSelected
              ]}
            >
              {code}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 8,
  },
  buttonSelected: {
    backgroundColor: '#007AFF', // Azul padrão iOS/Moderno
    borderColor: '#0056b3',
  },
  flag: {
    fontSize: 18,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonTextSelected: {
    color: '#fff',
  },
});