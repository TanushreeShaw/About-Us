import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const FixedContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#fff', height: '80vh' , width:'auto', padding: '30px' }}>
        <h1>Code of Conduct</h1>
        <ul>
          <li>
            <h3><b>Be Nice</b></h3>
            We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around.
          </li>
          <li>
          <h3><b>Be respectful and constructive</b></h3>
          Remember to be respectful and constructive with your communication to fellow members. Don't get into flamewars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.
          </li>
          <li>
          <h3><b>Be collaborative</b></h3>
          Work together! We can learn a lot from each other. Share knowledge, and help each other out.
          </li>
          <li>
          <h3><b>Participate</b></h3>
          Join in on discussions, show up for in-person meetings regularly, offer feedback, and help implement that feedback.
          </li>
          <li>
          <h3><b>Step down considerately</b></h3>
          If you have some form of responsibility in your community, be aware of your own constraints. If you know that a new job or personal situation will limit your time, find someone who can take over for you and transfer the relevant information (contacts, passwords, etc.) for a smooth transition.
          </li>
          <li>
          <h3><b>Basic etiquette for online discussions</b></h3>
          Don’t send messages to a big list that only need to go to one person. Keep off topic conversations to a minimum. Don’t be spammy by advertising or promoting personal projects which are off topic.
          </li>
          <br/>
        </ul>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default FixedContainer;