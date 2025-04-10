import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PesoI = ({ hm }) => {
    let alm = parseFloat(hm) / 100

    return (
        <View>
            <Text style={styles.pesoIdeal}>
                Peso <Text style={styles.textg}>mínimo</Text> ideal: {((alm * alm) * 18.5).toFixed(2)}
            </Text>
            <Text style={styles.pesoIdeal}>
                Peso <Text style={styles.textr}>máximo</Text> ideal: {((alm * alm) * 24.9).toFixed(2)}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    pesoIdeal: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default PesoI;