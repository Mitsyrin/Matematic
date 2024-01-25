import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Home = ({navigation})=> {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Number')} style={styles.button}>
        <Text style={styles.btn_text}>Таблица умножения</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Example')} style={styles.button}>
        <Text style={styles.btn_text}>Примеры</Text>
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
  btn_text:{
    color: '#8a8a8a',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Home