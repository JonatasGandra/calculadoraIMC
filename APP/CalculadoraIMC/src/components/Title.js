import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: 'gray',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
  },
});

export default Title;