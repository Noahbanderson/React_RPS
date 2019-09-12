import React from 'react';
import { Container, Header, Checkbox, Button } from "semantic-ui-react";
import Choices from './Choices.js'

class App extends React.Component {
  state={ 
    options: [
      {id: 1, name: "Rock"},
      {id: 2, name: "Paper"},
      {id: 3, name: "Scissors"}
    ], 
    twoPlayer: false,
    userChoice: 0,
    compChoice: 0,
    wins: 0,
    loses: 0,
    ties: 0,
    games: 0,
    youWin: false,
    compWins: false,
    itsaTie: false

  }

  toggleCheckBox = () => {
    this.setState({ 
      twoPlayer: !this.state.twoPlayer,
      userChoice: 0,
      compChoice: 0,
      wins: 0,
      loses: 0,
      ties: 0,
      games: 0,
      youWin: false,
      compWins: false,
      itsaTie: false
    },() => {this.twoFuncMenu()} )
  }


  twoFuncMenu = () => {
    
  }

  twoMenu = () => {
    
  }





  userChoiceFunc = (option) => {
    this.setState(
      { userChoice: option.id},
      () => {this.compChoiceFunc();}
    );    
  }

  compChoiceFunc = () => {
    if (this.state.twoPlayer === false ){
      const compChoice = Math.floor((1 + Math.random()*3) )
      this.setState({compChoice}, () => {this.gameFunc();})
    } else {

      //evoke 2nd user choice, then run game. 
    }
  }

  addTie = () => {
    this.setState({ties: this.state.ties + 1})
    this.setState({games: this.state.games + 1})
  }

  addYou = () => {
    this.setState({wins: this.state.wins + 1})
    this.setState({games: this.state.games + 1})
  }

  addComp = () => {
    this.setState({loses: this.state.loses + 1})
    this.setState({games: this.state.games + 1})
  }



  gameFunc = () => {
    const u = this.state.userChoice
    const c = this.state.compChoice
    
    
    if (u === 1 && c === 1) {
      this.setState({itsaTie: true})
      this.setState({youWin: false})
      this.setState({compWins: false})
      this.addTie()

    } else if (u === 1 && c === 2) {
      this.setState({itsaTie: false})
      this.setState({youWin: false})
      this.setState({compWins: true})
      this.addComp()

    } else if (u === 1 && c === 3) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()

    } else if (u === 2 && c === 1) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()

    } else if (u === 2 && c === 2) {
      this.setState({itsaTie: true})
      this.setState({youWin: false})
      this.setState({compWins: false})
      this.addTie()

    } else if (u === 2 && c === 3) {
      this.setState({itsaTie: false})
      this.setState({youWin: false})
      this.setState({compWins: true})
      this.addComp()

    } else if (u === 3 && c === 1) {
      this.setState({itsaTie: false})
      this.setState({youWin: false})
      this.setState({compWins: true})
      this.addComp()

    } else if (u === 3 && c === 2) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()

    } else if (u === 3 && c === 3) {
      this.setState({itsaTie: true})
      this.setState({youWin: false})
      this.setState({compWins: false})
      this.addTie()
    }

  }

  winningColor = () => {
    if (this.state.youWin === true) {
      return {backgroundColor: "green"}
    } else if (this.state.compWins === true) {
      return {backgroundColor: "red"}
    }
  }
  

  render() {
    



    return (
      <Container style={{margin: "25px"}}>   
        <Header as="h1" style={{textAlign: "center"}} >Rock, Paper, Scissors</Header>
        <Checkbox onClick={this.toggleCheckBox} toggle/>
        <div>
          Computer : Two Player
        </div>
        <hr />
        <br />
        <Header as="h3">What will you throw?</Header> 
        <br />

        <Choices 
          choices={this.state.options}
          userChoiceFunc={this.userChoiceFunc}
        />
        <br />
        <div> 
          You threw {this.state.options.map( option => 
            { if (option.id === this.state.userChoice)
              return( option.name)
            }
          )}
        </div>
        <div>
          Comp threw {this.state.options.map( option => 
              { if (option.id === this.state.compChoice)
              return (option.name)
            }
          )}
        </div>
        

        {this.state.games ? 
          <div>
            <br/>
            <Button style={this.winningColor()}>
              { this.state.youWin ? "You Win" : "" }
              { this.state.compWins ? "Comp Wins" : ""}
              { this.state.itsaTie ? "Its a Tie" : ""}
            </Button> 
          </div>
          : ""
        }
        
        <br />
        <div> 
          Wins: {this.state.wins}, Win %: {this.state.wins ? (this.state.wins / this.state.games * 100) : "" }
        </div>
        <div>
          Ties: {this.state.ties}, Tie %: {this.state.ties ? (this.state.ties / this.state.games * 100) : "" }
        </div>
        <div>
          Loses: {this.state.loses}, Lose %: {this.state.loses ? (this.state.loses / this.state.games * 100) : "" }
        </div>

      </Container>
    )
  }
}

export default App;
// , textAlign: "center"


//  Bonus Objectives:

// !Make it so it works with two players

// ?See if you can use componentDidUpdate( ) 
