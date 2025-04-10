import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Classificacao = ({ imc }) => {
    if (imc < 18.5) {
        return (
            <Text style={styles.Classificacao}>Você está <Text style={styles.abaixo}>Abaixo do Peso </Text> </Text>
        );
    } else if (imc < 25) {
        return (
            <Text style={styles.Classificacao}>Você está no <Text style={styles.normal}>Peso normal </Text></Text>
        );
    } else if (imc < 30) {
        return (
            <Text style={styles.Classificacao}>Você está <Text style={styles.sobre}>Sobrepeso </Text></Text>
        );
    } else if (imc < 35) {
        return (
            <Text style={styles.Classificacao}>Você está em <Text style={styles.g1}>Obesidade grau 1 </Text></Text>
        );
    } else if (imc < 40){
        return (
            <Text style={styles.Classificacao}>Você está em <Text style={styles.g2}>Obesidade grau 2 </Text></Text>
        );
    } else {
        return (
            <Text style={styles.Classificacao}>Você está em <Text style={styles.g3}>Obesidade grau 3 </Text></Text>
        );
    }

};

const styles = StyleSheet.create({
    Classificacao: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
    abaixo:{
        color: 'yellow',
    },
    normal:{
        color: 'green',
    },
    sobre:{
        color: 'purple',
    },
    g1:{
        fontSize: 20,
        color: 'pink',
    },
    g2:{
        fontSize: 20,
        color: 'red',
    },
    g3:{
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
    },
});

export default Classificacao;