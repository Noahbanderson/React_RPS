import React from 'react';
import { Card, Grid } from "semantic-ui-react";


const Choices = (props) => {

  return (
    <Grid columns={3} >
    <Grid.Row >
      {props.choices.map( option => (
        <Grid.Column key={option.id}>
          <Card onClick={() => props.userChoiceFunc(option)} description={option.name}/> 
        </Grid.Column>
      ))} 
    </Grid.Row>
  </Grid>

  )
}

export default Choices