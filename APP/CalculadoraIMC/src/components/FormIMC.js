import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Result from './Result';
import Classificacao from './Classificacao';
import PesoI from './PesoI';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [hm, setHm] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura || parseFloat(peso) === 0 || parseFloat(altura) === 0) {
      setMensagemErro('preencha os campos corretamente');
      setImc(null);
      return;
    }

    setMensagemErro('');
    let alturaMetros = parseFloat(altura) / 100;
    let imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    setHm(altura);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} color="gray"/>
      
      
      {mensagemErro ? <Text style={styles.txterr}>{mensagemErro}</Text> : null}

      
      {imc && <Result imc={imc} />}
      {imc && <Classificacao imc={imc} />}
      {imc && <PesoI hm={hm} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  txterr: {
    color: 'red',
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
    
  },
});

export default FormIMC;