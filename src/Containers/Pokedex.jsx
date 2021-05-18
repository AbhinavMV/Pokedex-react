//files
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Appbar from '../Components/Appbar';
import PokemonCard from '../Components/PokemonCard';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
        maxWidth: '100%',
    //   marginLeft:100
    paddingTop: 50,
    [theme.breakpoints.only('xs')]:{
        paddingLeft:80,
    },
    [theme.breakpoints.up('sm')]:{
        paddingLeft:100,
    },
    },

  }));

const Pokedex = (props) =>{
    // console.log(props)
    const history = props.history;
    const classes = useStyles();
    const [pokeData,setPokeData] = useState(undefined)
    // const arr = undefined  
    //url = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png
    
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then((response)=>{
            const {results} = response.data
            setPokeData(results)
        }
        )
        .catch()

    },[])
    
    return(
        <>
            <Appbar/>
            <div style={{}}>
            <Grid 
            className={classes.root}
            container 
            direction="row"
            justify = 'flex-start'
            alignItems="center" 
            alignContent='center'
            wrap='wrap'
            spacing={2}>
            {/* <Grid item xl={2} style={{minWidth:'250'}}/> */}
            {/* {Object.keys(mockedData).map((key,index)=>{
                const {name,id} = mockedData[key];
                // console.log(name,id)
                const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                return (
                    <PokemonCard key={index} name={name} url={url} id={id} history={history}/>
                );
            })
            } */}

            {pokeData ?
            pokeData.map((obj,index)=>{
                const {name,url:pokeUrl} = obj;
                const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
                return(
                    <PokemonCard key={index} name={name} url={url} id={index+1} history={history} pokeUrl={pokeUrl}/>
                );
            })
            :
            <CircularProgress/>
            }
            {/* <Grid item xl={2} style={{minWidth:'250'}}/> */}

            </Grid>
            </div>
        </>
    );
}
export default Pokedex;