// src/views/signatureView.jsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

export default function SignatureView({ signatureRef, onOK, onEmpty, onClear, onSave }) {
  // Estilização customizada injetada na WebView do canvas
  const customStyle = `
    .m-signature-pad {
      box-shadow: none;
      border: none;
      background-color: #FFF;
    }
    .m-signature-pad--body {
      border: 1px dashed #CBD5E1;
      border-radius: 8px;
    }
    .m-signature-pad--footer {
      display: none;
    }
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assine no espaço abaixo:</Text>
      
      <View style={styles.signatureContainer}>
        <SignatureScreen
          ref={signatureRef}
          onOK={onOK}
          onEmpty={onEmpty}
          webStyle={customStyle}
          autoClear={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={onClear}>
          <Text style={styles.buttonTextClear}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={onSave}>
          <Text style={styles.buttonTextSave}>Salvar Assinatura</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
    textAlign: 'center',
  },
  signatureContainer: {
    height: 250,
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#E2E8F0',
  },
  saveButton: {
    backgroundColor: '#0284C7',
  },
  buttonTextClear: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSave: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});