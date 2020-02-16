import React, { Component } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';

import { Delete } from '@material-ui/icons';



export default class App extends Component {

  state = {
    exercises: [],
    title: ''
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleCreate = (e) => {
    e.preventDefault()

    if (this.state.title) {
      this.setState(({ exercises, title }) => (
        {
          exercises: [...exercises, { title, id: Date.now() }],
          title: ''
        }
      ))
    }
  }

  handleDelete = id => {
    console.log('hi')
    this.setState(({ exercises }) => (
      {
        exercises: exercises.filter(ex => ex.id !== id)
      }
    ))
  }

  render() {
    console.log(this.state.exercises)
    const { title, exercises } = this.state;
    const styles = {  root: {    margin: 20 , marginLeft:"auto", marginRight:"auto",    padding: 20,    maxWidth: 400  }}
    return (
      <Paper style={styles.root}>
        <Typography variant="h3" align="center" gutterBottom>Exercises</Typography>
        <form onSubmit={this.handleCreate}>
          <TextField name="title" label="Exercise" value={title} margin="normal" onChange={this.handleChange} />
          <Button type="submit" variant="contained" color="primary" >Create</Button>
        </form>
        <List>
          {
            exercises.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton color="primary" onClick={() => this.handleDelete(id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List>
      </Paper>
    )
  }
}

