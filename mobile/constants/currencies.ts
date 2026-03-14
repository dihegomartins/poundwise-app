// mobile/constants/currencies.ts

export const CURRENCIES = {
  BRL: {
    symbol: 'R$',
    name: 'Real Brasileiro',
    flag: '🇧🇷',
  },
  GBP: {
    symbol: '£',
    name: 'Libra Esterlina',
    flag: '🇬🇧',
  },
};

export type CurrencyCode = keyof typeof CURRENCIES;