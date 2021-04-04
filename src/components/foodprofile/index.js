import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '../card'
const useStyles = makeStyles({
   gridContainer:{
       padding:'20px',
       paddingRight:'20px',
   }, 
  });
  const foodcard =() =>
  {
      return (
        <Grid item  xs={12} sm={6} md={4} >
            <Card />
            </Grid>
      );
  };
export default function Foodprofile() {
const classes=useStyles();
    return (
            <Grid container spacing={3}  className={classes.gridContainer} >
                <Grid item xs={12} container>
                    <Grid item xs={5} />
                    <Grid item xs={2}>
                    <Typography  gutterBottom variant="h5" component="h4" >
            Foodprofile
          </Typography>
                    </Grid>
                    <Grid item xs={5} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
           
            {foodcard()}
            {foodcard()}
            {foodcard()}
            {foodcard()}
            {foodcard()}
            {foodcard()}
            </Grid>
    );
}