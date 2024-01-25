import { useEffect, useState } from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
const Number = ({navigation: {goBack}})=> {

  const [firstnumber,setOneNumber] = useState('');
  const [secondarynumber,setSecondaryNumber] = useState('');
  const [score,setScore] = useState(0);
  const [truenumber,setTrueNumber] = useState('');
  const [buttons,setButton] = useState([]);


  useEffect(()=> {
    TableNumber();
  },[]);
  const RandomNumber = () => {
    return Math.floor(Math.random() * 10 ) + 1;
  }
  const TableNumber = () => {
    const newFirstNumber = RandomNumber();
    const newSecondaryNumber = RandomNumber();
    const newThirdNumber = ((RandomNumber() * RandomNumber()).toString());
    const newFourthNumber = ((RandomNumber())+4*2);
    const newFiveNumber = ((RandomNumber()*2));
    setOneNumber(newFirstNumber);
    setSecondaryNumber(newSecondaryNumber);
    setTrueNumber((newFirstNumber * newSecondaryNumber).toString());
    const TrueAnswerNumber = ((newFirstNumber * newSecondaryNumber).toString());
    const ButtonNumber = [
      newFiveNumber.toString(),
      newFourthNumber.toString(),
      newThirdNumber.toString(),
      TrueAnswerNumber.toString(),
    ]
    const Rndbtnps = RandomPositionButton(ButtonNumber);
    setButton(Rndbtnps);

  };
  const RandomPositionButton = (array) => {
    for (let i = array.length - 1;i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const Check = (selectedAnswerd) => {
    if(truenumber === selectedAnswerd){
      setScore(score+1);
    }
    TableNumber();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.btn_text}>{firstnumber}*{secondarynumber}</Text>
      <View style={styles.column}>
        {buttons.map((answer,index)=>(
          <TouchableOpacity style={styles.btn_user} key={index} onPress={() => Check(answer)}>
          <Text style={styles.btn_text}>{answer}</Text>
        </TouchableOpacity>
        ))}
      </View>
      <View style={styles.score_container}>
      <TouchableOpacity style={styles.button} onPress={Check}>
          <Text style={styles.btn_text}>Другие числа</Text>
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
export default Number