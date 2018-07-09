import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Clipboard } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'McDonalds',
      address: '5th avenue 321'
    };
  }

  handleLongPress = async () => {
       await Clipboard.setString(`${this.state.name} ${this.state.address}`);
       alert('Copied to Clipboard!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onLongPress={this.handleLongPress}
          delayLongPress={2000}>
            <Text style={styles.text}>{ this.state.name }</Text>
            <Text style={styles.text}>{ this.state.address }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    backgroundColor: '#becee8',
  }
});
