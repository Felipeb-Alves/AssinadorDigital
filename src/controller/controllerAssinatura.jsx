import React, { useRef } from 'react';
import { Alert } from 'react-native';
import SignatureView from '../views/signatureView';
import { SignatureModel } from '../models/signatureModel';

export default function SignatureController({ onSignedSuccess }) {
  const signatureRef = useRef(null);


  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  const handleSavePress = () => {
    signatureRef.current?.readSignature();
  };

  const handleOK = async (base64Image) => {
    const result = await SignatureModel.saveSignature(base64Image);

    if (result.success) {
      Alert.alert('Sucesso', result.message);
      if (onSignedSuccess) {
        onSignedSuccess(result.data);
      }
    } else {
      Alert.alert('Erro', result.message);
    }
  };

  // Callback acionado se o usuário tentar salvar com o canvas vazio
  const handleEmpty = () => {
    Alert.alert('Atenção', 'Por favor, faça a assinatura antes de salvar.');
  };

  return (
    <SignatureView
      signatureRef={signatureRef}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onSave={handleSavePress}
    />
  );
}