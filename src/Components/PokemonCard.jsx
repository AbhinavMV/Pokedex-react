import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import { capitalise } from '../utils/Capitalise';
import { deepPurple,purple } from '@material-ui/core/colors';

const colours = {
    'fire':'#F5AC78',
    'water':'#9DB7F5',
    'grass':'#A7DB8D',
    'bug':'#C6D16E',
    'fighting':'#D67873',
    'ground':'#EBD69D',
    'rock':'#D1C17D',
    'ghost': '#A292BC' ,
    'poison':purple[200],
    'electric':'#FAE078',
    'fairy':'#F4BDC9',
    'psychic':'#FA92B2',
    'normal':'#C6C6A7',
    'flying':'#C6B7F5',
    'dark':'#A29288',
    'dragon':deepPurple[200],
    'ice':'#BCE6E6',
    'steel':'#D1D1E0'
}


const useStyles = makeStyles(()=>({
  Media: {
    height: 200,
    width: 200,
    margin:'auto',
    objectFit: 'cover'
  },
  container: props=>( {
    height:'120',
    width:'100',
  }),
  inner:props=>({
    height:'220px',
    width:'220px',
    background:props.colour,
    mozBorderRaidus: '100px',
    webkitBorderRadius: '100px',
    borderRadius: '100px',
    margin:'auto'
  })
}));


export const PokemonCard = ({name,id,types,weight,height,stats,url}) =>{
    let colour = colours[types[0]]
    const classes = useStyles({colour});
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card style={{width:250,height:310}} >
                <CardActionArea>
                    <div className={classes.container}>
                    <CardMedia
                    className={classes.inner}
                    component="img"
                    image={url.other['official-artwork'].front_default}
                    title={name}
                    />
                    </div>
                    <CardContent style={{textAlign:'center'}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {capitalise(name)}
                        </Typography>
                        <div style={{display:'inline-flex'}}>
                          {types.map((type,index)=><Typography key={index} gutterBottom style={{background:colours[type],width:'70px',margin:2,borderRadius:'20px',marginBottom:4}} variant="subtitle1">{type}</Typography>)}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      );
}