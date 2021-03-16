import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcular(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    // alert(imc)

    if(imc < 18.6){
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2));
    } else if(imc >= 18.6 && imc < 24.9){
      alert('Voce esta no peso ideal! ' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9){
      alert('Voce esta levemente acima do peso! ' + imc.toFixed(2))
    } else if(imc >= 34.9 && imc < 45.9){
      alert('Voce esta com obesidade (Grau 1) ' + imc.toFixed(2))
    } else if(imc >= 45.9 && imc < 59.9){
      alert('Voce esta com obesidade (Grau 2)' + imc.toFixed(2)) 
    } else if (imc >= 59.9 && imc < 59.9){
      alert('Voce esta com obesidade morbida ' + imc.toFixed(2))
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC!</Text>

      <TextInput placeholder="Peso (kg)" value={peso} onChangeText={(peso) => setPeso(peso)} keyboardType="numeric" style={styles.input}/>
      <TextInput placeholder="Altura (cm)" value={altura} onChangeText={(altura) => setAltura(altura)} keyboardType="numeric" style={styles.input}/>
   
      <TouchableOpacity style={styles.btn} onPress={() => calcular()}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 25
  },
  input:{
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#121212',
    fontSize: 20
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
    borderRadius: 10
  },
  btnText:{
    color: '#FFF',
    fontSize: 25
  }
});
