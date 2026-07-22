// src/models/signatureModel.js
export const SignatureModel = {
  async saveSignature(base64Data) {
    try {
      // Simulação de envio para uma API ou armazenamento local
      console.log('Salvando assinatura no Model...');
      
      // Aqui você faria o seu fetch/axios para o backend:
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