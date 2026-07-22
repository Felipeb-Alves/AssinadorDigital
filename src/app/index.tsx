// src/app/index.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignatureController from '../controller/controllerAssinatura';

export default function HomeScreen() {
  const handleSignatureComplete = (base64Code: string) => {
    console.log("Assinatura capturada:", base64Code.substring(0, 50) + "...");
  };

  return (
    <View style={styles.container}>
      <SignatureController onSignedSuccess={handleSignatureComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});