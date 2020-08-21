import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StopIcon from '@material-ui/icons/Stop';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const SimpleContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <br/>
        <Typography component="div" style={{ backgroundColor: '#dddddd', height: 'auto', width:'auto' , 'padding': '70px', display:'flexbox', 'flex-wrap':'wrap', 'flex-direction':'column'}} >
          <h1>Opportunities</h1>
          <Grid container spacing ={2}>
            <Grid item xs={6} direction="column">
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.
            </Grid>
            <Grid item xs={6}>
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.<br/>
            </Grid>
            <Divider/>
            <Grid item xs={6}>
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.<br/>
            </Grid>
            <Grid item xs={6}>
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.<br/>
            </Grid>
            <Divider/>
            <Grid item xs={6}>
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.
            </Grid>
            <Grid item xs={6}>
            <StopIcon/> &nbsp; Growing their knowledge on developer technologies and more through peer to peer workshops and events.
            </Grid>
          </Grid>
        </Typography><br/>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
