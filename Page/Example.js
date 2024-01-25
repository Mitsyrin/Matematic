import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
const Example = ({navigation: {goBack}})=>{

  const [firstnumber,setOneNumber] = useState('');
  const [secondarynumber,setSecondaryNumber] = useState('');
  const [score,setScore] = useState(0);
  const [truenumber,setTrueNumber] = useState('');
  const [userAnswer,setUserAnswer] = useState('');
  const [answer,setAnswer] = useState('');
  const operators = ['+','-','*']
  const RandomOperation = operators[Math.floor(Math.random()* operators.length)];
  useEffect(()=>{
    TableNumber();
  },[]);

  const RandomNumber = () => {
    return Math.floor(Math.random() * 10 ) + 1;
  }
  const TableNumber = () => {
    const newFirstNumber = RandomNumber();
    const newSecondaryNumber = RandomNumber();
    const newTrueNumber = (eval(`${newFirstNumber} ${RandomOperation} ${newSecondaryNumber}`).toString());
    const newAnswer = (`${newFirstNumber} ${RandomOperation} ${newSecondaryNumber}`);
    setAnswer(newAnswer);
    setOneNumber(newFirstNumber);
    setSecondaryNumber(newSecondaryNumber);
    setTrueNumber(newTrueNumber);

  };

  const Check = () => {
    if(truenumber === userAnswer ){
    setScore(score+1);
    } 
    TableNumber();
  };
  const Gen = () =>{
    TableNumber();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.btn_text}>{answer}</Text>
      <View style={styles.container_input}>
        <TextInput style={styles.textinput} keyboardType='numeric' placeholder='Введите число' value={userAnswer} onChangeText={(text)=>setUserAnswer(text)}  ></TextInput>
      </View>
      <View >
      <TouchableOpacity style={styles.button} onPress={Check}>
          <Text style={styles.btn_text}>Проверить</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.score_container}>
      <TouchableOpacity style={styles.button} onPress={Gen}>
          <Text style={styles.btn_text}>Другой пример</Text>
      </TouchableOpacity>
      <Text style={styles.btn_text}>Ваши баллы:{score}</Text>
      </View>
      <TouchableOpacity onPress={() => goBack()} style={styles.button}>
      <Text style={styles.btn_text}>Вернуться обратно</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  container_input:{
    backgroundColor: '#3d3d3d',
    width: 200,
    height: 50,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    color: '#aaa',
    fontWeight: 'bold',
  },
  button:{
    width: 200,
    height: 50,
    backgroundColor: '#3d3d3d',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8a8a8a',
    borderWidth: 2,
  },
  btn_user:{
    width: 50,
    height: 50,
    backgroundColor: '#3d3d3d',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  btn_text:{
    color: '#8a8a8a',
    fontWeight: 'bold',
    fontSize: 20,
  },
  score_container:{
    marginTop:5,
    marginBottom:5,
  }
});
export default Example