import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

// const useStyles = makeStyles(()=>({
//   root: {
//     minWidth: 100,
//     minHeight: 100,
//     maxWidth: 100,
//     maxHeight:100,
//     alignText:'center',
//   },
//   Media: {
//     height: 50,
//     width: 50,
//     objectFit: 'cover'
//   }
// }));

export default function PokemonCard({name,id,url,history}) {
  // const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card style={{minHeight:300,minWidth:300}} >
            <CardActionArea onClick={()=>(history.push(`/pokemon/${id}`))}>
                <CardMedia
                // className={classes.Media}
                component="img"
                alt={name}
                // height="150"
                image={url}
                title={name}
                />
                <CardContent style={{textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${id}.${name}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
  );
}
