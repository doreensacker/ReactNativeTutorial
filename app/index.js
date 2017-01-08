import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';

export default class RNTutorial extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      text:'',
      items: [],
      dataSource: ds.cloneWithRows([])
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
        <Text
          onPress={() => {
            this.state.items.push(this.state.text);
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.state.items)
            });
          }}>
          Save
        </Text>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(item) => <Text>{item}</Text>}
          enableEmptySections={true}
        />
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
  listView: {
    marginTop: 20
  }
});
