import React from 'react';
import { Grid } from "semantic-ui-react";


const Choices = (props) => {

  return (
    <Grid columns={3} >
    <Grid.Row >
      {props.choices.map( option => (
        <Grid.Column key={option.id}>
          <img style={{borderRadius: "50%", height: "200px"}}
            src={require(`./images/${option.name}.png`)} 
            onClick={
                    props.twoPlay ? 
                      () => props.secondUserChoiceFunc(option)
                    : 
                      () => props.userChoiceFunc(option) 
                  } 
          />
          

        </Grid.Column>
      ))} 
    </Grid.Row>
  </Grid>

  )
}

export default Choices


 

//                add Card to semantic ui react
//                <Card onClick={
//                   props.twoPlay ? 
//                   () => props.secondUserChoiceFunc(option)
//                   : 
//                   () => props.userChoiceFunc(option) 
//                   }
//                 description={option.name}/> 