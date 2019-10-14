import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoicesButton from './Component/ChoicesButton';
import CHOICES from './choices';
import ChoiceCard from './Component/ChoiceCard';
import Header from './Component/Header';

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getRoundOutcome = (userChoice, computerChoice) => {
    let result;
  
    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';
    return result
  };

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userChoice: {},
      computerChoice: {},
      result: 'Make your choice'
    }
  }

  onChoicePress= (choice) => {
   const userChoice = CHOICES.find(item=>item.name===choice)
   const computerChoice = randomComputerChoice ()
   const result = getRoundOutcome(userChoice.name, computerChoice.name)
   this.setState({userChoice, computerChoice, result})
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Header result={this.state.result}/>
        </View>
        <View style={styles.playArea}>
            <View style={styles.choicesContainer}>
                <ChoiceCard
                  playerName="You"
                  choice={this.state.userChoice}
                />
                <Text>VS</Text>
                <ChoiceCard
                playerName="Computer"
                choice={this.state.computerChoice}/>
            </View>
        </View>
        <View style={styles.ChoicesButton}>
          <View style={styles.buttonContainer}> 
            <ChoicesButton onButtonPress ={this.onChoicePress}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flex: 0.15,

  },
  playArea: {
    flex: 0.55,

  },
  ChoicesButton: {
    flex: 0.3,

  }, 
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  
});
