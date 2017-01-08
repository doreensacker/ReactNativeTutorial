import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class RNTutorial extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Todo App
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Gib eine Aufgabe ein'
          onChangeText={(text) => this.setState({text})}/>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput:{
    height: 40,
  },
});
