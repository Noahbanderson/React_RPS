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
    itsaTie: false,
    twoPlay: false,
    twoWins: 0,
    twoLoses: 0,
    

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
      itsaTie: false,
      twoLoses: 0,
      twoWins: 0
    } )
  }

  // ,() => {this.twoPlayerFuncMenu()}

  // twoPlayerFuncMenu = () => {
  //   this.twoMenu()
  // }

  twoMenu = () => {
    debugger
  }

  secondUserChoiceFunc = (option) => {
    // debugger

    this.setState({twoPlay: false, compChoice: option.id}, () => this.gameFunc())
  }

  userChoiceFunc = (option) => {
    this.setState(
      { userChoice: option.id},
      () => {this.compChoiceFunc();}
    );    
  }
  
  //evoke 2nd user choice, then run game. 

  compChoiceFunc = () => {
    if (this.state.twoPlayer === false ){
      const compChoice = Math.floor((1 + Math.random()*3) )
      this.setState({compChoice}, () => {this.gameFunc();})
    } else if (this.state.twoPlayer === true) {
      this.setState({twoPlay: true})
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

  addTwoLose = () => {
    this.setState({twoLoses: this.state.twoLoses + 1})
  }

  addTwoWin = () => {
    this.setState({twoWins: this.state.twoWins + 1})
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
      {this.state.twoPlayer ? this.addTwoWin() : console.log("") }

    } else if (u === 1 && c === 3) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()
      {this.state.twoPlayer ? this.addTwoLose() : console.log("") }

    } else if (u === 2 && c === 1) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()
      {this.state.twoPlayer ? this.addTwoLose() : console.log("") }

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
      {this.state.twoPlayer ? this.addTwoWin() : console.log("") }

    } else if (u === 3 && c === 1) {
      this.setState({itsaTie: false})
      this.setState({youWin: false})
      this.setState({compWins: true})
      this.addComp()
      {this.state.twoPlayer ? this.addTwoWin() : console.log("") }
      
    } else if (u === 3 && c === 2) {
      this.setState({itsaTie: false})
      this.setState({youWin: true})
      this.setState({compWins: false})
      this.addYou()
      {this.state.twoPlayer ? this.addTwoLose() : console.log("") }

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
      return {backgroundColor: "blue"}
    }
  }
  
  displayWinTwo = () => (
    this.state.games ? 
      <div>
        <br/>
        <Button style={this.winningColor()}>
          { this.state.youWin ? "You Win" : "" }
          { this.state.compWins ? "Comp Wins" : ""}
          { this.state.itsaTie ? "Its a Tie" : ""}
        </Button> 
      </div>
      : ""
    
  )

  displyWinComp = () => (
    this.state.games ? 
      <div>
        <br/>
        <Button style={this.winningColor()}>
          { this.state.youWin ? "Player One Win" : "" }
          { this.state.compWins ? "Player Two Wins" : ""}
          { this.state.itsaTie ? "Its a Tie" : ""}
        </Button> 
      </div>
      : "" 
  )

  twoPlayerSecret = () => (
    this.state.options.map( option => 
      { if (option.id === this.state.userChoice)
        return( option.name)
      }
    )
  )


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


        <Header as="h3">{this.state.twoPlay ? "Second Player's Choice. " : ""}What will you throw?</Header> 
        <br />

        <Choices 
          choices={this.state.options}
          userChoiceFunc={this.userChoiceFunc}
          twoPlay={this.state.twoPlay}
          secondUserChoiceFunc={this.secondUserChoiceFunc}
        />
        <br />




      
        <div> 
          {this.state.twoPlayer ? "Player One " : "You"} threw { this.state.twoPlay ? "" : this.twoPlayerSecret()}
        </div>


        <div>
          {this.state.twoPlayer ? "Player Two " : "Comp"} threw {this.state.options.map( option => 
              { if (option.id === this.state.compChoice)
              return (option.name)
            }
          )}
        </div>
        



        {this.state.twoPlayer ? this.displyWinComp() : this.displayWinTwo() } 




        
        <br />
        {this.state.twoPlayer ? "Player One Stats" : ""}
        <div> 
          Wins: {this.state.wins}, Win %: {this.state.wins ? (this.state.wins / this.state.games * 100) : "" }
        </div>
        <div>
          Ties: {this.state.ties}, Tie %: {this.state.ties ? (this.state.ties / this.state.games * 100) : "" }
        </div>
        <div>
          Loses: {this.state.loses}, Lose %: {this.state.loses ? (this.state.loses / this.state.games * 100) : "" }
        </div>
        <br />





        {this.state.twoPlayer ? 
          <div>
            Player Two Stats
            <br/>
            <div> 
              Wins: {this.state.twoWins}, Win %: {this.state.twoWins ? (this.state.twoWins / this.state.games * 100) : "" }
            </div>
            <div>
              Ties: {this.state.ties}, Tie %: {this.state.ties ? (this.state.ties / this.state.games * 100) : "" }
            </div>
            <div>
              Loses: {this.state.twoLoses}, Lose %: {this.state.twoLoses ? (this.state.twoLoses / this.state.games * 100) : "" }
            </div>
          </div>
          : ""}

          

      </Container>
    )
  }
}

export default App;
// , textAlign: "center"


//  Bonus Objectives:

// !Make it so it works with two players

// ?See if you can use componentDidUpdate( ) 
