import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import get from 'lodash/get';
import * as Actions from './actions';

class HomeScreen extends React.Component {
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
      <View>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="BEGIN"
        />
      </View>
    );
  }
}

class QuizText extends React.Component {
  render() {
    return (
      <Text> {this.props.name } </Text>
    )
  }
}

class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      category: Object, 
      question: Object,
      response: [],
      step: Object,
      correctAnswers: Object
    }
  }

  static navigationOptions = {
    title: 'Quiz Screen',
  };

  increment(incrementstep, answer) {
    var answers = this.state.answer;
    var step = this.state.step;
    var correctAns = this.state.correctAnswers;
    var correctNumberAnswered = correctAns;
    console.log('number', correctAns);
    console.log('answer', answer);
    console.log('correct anser', answers[step])
    if (answers[step] == answer){
      var x = correctNumberAnswered + 1;
      this.setState({
        correctAnswers: x,
      })
    }
    var newStep = incrementstep +1;
    this.setState({
      step: newStep
    })
    // this.props.dispatch(Actions.incrementStep(newStep));
  }

  fetchData() {
    var questionArray = [];
    var answerArray = [];
    const data = fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 0; i < responseJson.results.length; i++) {
          questionArray.push(responseJson.results[i].question);
          answerArray.push(responseJson.results[i].correct_answer);
        }
        this.setState({
          isLoading: false,
          question: questionArray,
          answer: answerArray,
          step: 1 ,
          correctAnswers: 0
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentWillMount() {
    this.fetchData();
  }

  render() {
    const currentStep = this.state.step;
    var questionsScreen = this.state.question.length >= currentStep;

    return (
      <View style={{
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {questionsScreen && <Text style={styles.bigblue}>{this.state.question[currentStep]}</Text>}
        <Text style={styles.bigblue}> {this.state.correctAnswers}</Text>
        <Button
          onPress={() => { this.increment(currentStep, 'True')}}
          title="TRUE"
        />
        <Button
          onPress={() => { this.increment(currentStep, 'False')}}
          title="FALSE"
        />
      </View>
      
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: QuizScreen}
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
