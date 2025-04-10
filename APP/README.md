# EXPLICAÇÃO


## Title:

- Exibe o título "Calculadora de IMC".
- Ultiliza o StyleSheet para definir a estilização do texto.
  >`const styles = StyleSheet.create({
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
});`

---

## FormIMC:

- Entrada de Dados: 
  -  Confirma se algum input não está preencido devidamente.  
  ``` javascript
  if (!peso || !altura || parseFloat(peso) === 0 || parseFloat(altura) === 0) {
      setMensagemErro('preencha os campos corretamente');
      setImc(null);
      return;
    }
    ```
  - Utiliza `TextInput` para coletar o peso e a altura.
- Cálculo do IMC: 
   - Converte cm para metros e calcula o IMC usando a fórmula peso / altura^2.
   ``` javascript
   let alturaMetros = parseFloat(altura) / 100;
    let imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    setAltfeito(altura);
  };
  ```
- Exibição de Resultados: 
  -  Renderiza o Result, Classificacao e PesoI para mostrar valor do IMC, a classificação do IMC e o peso ideal.

- Exibe uma mensagem de erro caso os campos forem nulos.

---

## Result:

- Recebe o valor do IMC (`imc`) e exibe na tela.

---

## Classificacao:

- Recebe o valor do imc e com o sistema condicional, define o estado que a pessoa se encontra e exibe na tela.

---

## PesoI:
 - Recebe a altura (`hm`) e calcula o peso mínimo e máximo ideal com base nessa altura. Ele exibe esses valores na tela. os pesos ideais são calculados usando as fórmulas:

    - Peso mínimo ideal: (altura em metros)^2 * 18.5
    - Peso máximo ideal: (altura em metros)^2 * 24.9

---

## App.js:

- Ele é o componente principal do app. exibe o FormIMC e o Result.
- KeyboardAvoidingView: Evita que o teclado sobreponha os inputs.
- TouchableWithoutFeedback: O teclado é fechado quando clica em qualquer lugar fora dele.
- footer: Para falar que eu sou o autor.

---

## Vídeo Explicativo:

- **[link do vídeo no Drive](https://drive.google.com/file/d/1LIEcwJJYzH9OwL4xou1P6thdXSGzUZjh/view?usp=drive_link)**