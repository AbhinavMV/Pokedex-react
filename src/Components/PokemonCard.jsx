import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth:250,
    maxWidth: 250,
    alignText:'center',
  },
}));

export default function PokemonCard({name,id,url,history}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2}  className={classes.root}  >
        <Card >
            <CardActionArea onClick={()=>(history.push(`/pokemon/${id}`))}>
                <CardMedia
                component="img"
                alt={name}
                height="150"
                image={url}
                title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" >
                        {`${id}.${name}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
  );
}
