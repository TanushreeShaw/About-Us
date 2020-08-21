import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Content from './content';
import SimpleContainer from './opportunities';
import FixedContainer from './coc';

const App = () => {
  
  return (
    <>
    <div className="App">
      <h1> About Us </h1>
    </div>
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}><Content/></Grid>
        <Grid item xs={0} sm={2} />
      
    </Grid>
    </Grid>
    <Grid item xs={12}>
    <SimpleContainer/>
    </Grid>
    <FixedContainer/>
    
    </>
  );
}

export default App;
