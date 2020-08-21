import React from 'react';
import MediaCard from './card';
import { Grid } from '@material-ui/core';


const content = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
        <MediaCard title={"Concept of DSC ?"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <MediaCard title={"Why DSC ?"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
      </Grid>
      <Grid item xs={12} sm={4}> 
        <MediaCard title={"Target Audiences"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
      </Grid>
    </Grid>
  );
};

export default content;