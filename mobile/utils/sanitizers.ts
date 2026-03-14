// mobile/utils/sanitizers.ts

/**
 * Limpa o input do utilizador para aceitar apenas números e um ponto decimal.
 */
export const sanitizeNumericInput = (text: string): string => {
  // 1. Substitui vírgula por ponto
  let cleaned = text.replace(',', '.');
  
  // 2. Remove tudo o que não for número ou ponto
  cleaned = cleaned.replace(/[^0-9.]/g, '');
  
  // 3. Garante que só exista um único ponto decimal
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = parts[0] + '.' + parts.slice(1).join('');
  }
  
  return cleaned;
};