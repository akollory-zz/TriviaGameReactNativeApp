import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }
  static navigationOptions = {
    title: 'Welcome',
  };

  componentDidMount() {

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Text style={styles.bigblue}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.red}>You will be presented with 10 True or False questions.</Text>
        <Text style={styles.red}>Can you score 100%?</Text>
        <Button
          onPress={() => navigate('Quiz')}
          title="BEGIN"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  container: {
    borderRadius: 4, 
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});