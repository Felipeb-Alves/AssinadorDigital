export const SignatureModel = {
  async saveSignature(base64Data) {
    try {
      console.log('Salvando assinatura no Model...');
    
      // const response = await api.post('/signatures', { signature: base64Data });

      return {
        success: true,
        message: 'Assinatura salva com sucesso!',
        data: base64Data,
      };

    } catch (error) {
      return {
        success: false,
        message: 'Erro ao salvar a assinatura.',
        error: error.message,
      };
    }
  },
};