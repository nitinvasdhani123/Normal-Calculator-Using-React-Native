import React, {useState,useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';

function App() {
  const [input, setinput] = useState('0');
  const [string, setstring] = useState('');

  const calculate = (text) => {
    if (text === '=') {
      if (string !== '') {
        try {
          const result = eval(string);
          setstring(result.toString());
          setinput(result.toString());
        } catch (error) {
          setstring('');
          setinput('Error');
        }
      }
    } else if (text === 'AC') {
      setstring('');
      setinput('0');
    } else if (text === 'C') {
      const slicedString = string.slice(0, string.length - 1);
      setstring(slicedString);
      setinput(slicedString === '' ? '0' : slicedString);
    } else {
      setstring(string + text);
      setinput(string + text);
    }
  };

 



  return (
    <View style={styles.main}>
        <TextInput style={styles.input} value={input} multiline={true} numberOfLines={4} editable={false}></TextInput>
        <View style={styles.buttonview}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('AC');
            }}>
            <Text style={styles.buttontext}>AC</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('C');
            }}>
            <Text style={styles.buttontext}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('%');
            }}>
            <Text style={styles.buttontext}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonorange]}
            onPress={() => {
              calculate('/');
            }}>
            <Text style={styles.buttontext}>/</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonview}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('7');
            }}>
            <Text style={styles.buttontext}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('8');
            }}>
            <Text style={styles.buttontext}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('9');
            }}>
            <Text style={styles.buttontext}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonorange]}
            onPress={() => {
              calculate('*');
            }}>
            <Text style={styles.buttontext}>*</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonview}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('4');
            }}>
            <Text style={styles.buttontext}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('5');
            }}>
            <Text style={styles.buttontext}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('6');
            }}>
            <Text style={styles.buttontext}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonorange]}
            onPress={() => {
              calculate('-');
            }}>
            <Text style={styles.buttontext}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonview}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('1');
            }}>
            <Text style={styles.buttontext}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('2');
            }}>
            <Text style={styles.buttontext}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('3');
            }}>
            <Text style={styles.buttontext}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonorange]}
            onPress={() => {
              calculate('+');
            }}>
            <Text style={styles.buttontext}>+</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonview}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('00');
            }}>
            <Text style={styles.buttontext}>00</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('0');
            }}>
            <Text style={styles.buttontext}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              calculate('.');
            }}>
            <Text style={styles.buttontext}>.</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonorange]}
            onPress={() => {
              calculate('=');
            }}>
            <Text style={styles.buttontext}>=</Text>
          </TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  input: {
    maxHeight:300,
    fontSize: 50,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    padding: 10,
  },
  buttonview: {
    flex:1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgb(155, 153, 153)',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  buttonorange: {
    backgroundColor: 'orange',
  },
  buttontext: {
    color: 'white',
    fontSize: 40,
  },
});

export default App;