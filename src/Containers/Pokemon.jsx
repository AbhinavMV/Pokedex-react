import { makeStyles, Paper, Typography } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(100),
      },
      justifyContent:'center',
      verticalAlign:'center',
    },
  }));
const Pokemon = (props) =>{
    const classes = useStyles();
    const {id} = props.match.params
    // console.log(props.match)
    const [pokeData,setPokeData] = useState(undefined)
    // console.log('before'+pokeData)
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response)=>{
            // console.log(response)
            
            const {name,weight,types,height} = response.data
            // console.log(response);
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            setPokeData({
                'name':name,
                'weight':weight,
                'height':height,
                'url':url,
                'types':types,
            })
        }
        )
        .catch()

    },[pokeData,id]);

    const showPokemonType = (typeArr) => {
        const types = []
        typeArr.map((obj)=>(
            types.push(obj.type.name)
        ))
        // console.log(types);
        return types
    }

    return(
        <>
        <div className={classes.root}>
            <Paper elevation={3} >
            {
            pokeData &&
            <>
               <Typography variant='h1'>{`${id}.${pokeData['name']}`}</Typography>    
                <img src={pokeData['url']} height='500' width='500' alt='Not Found'/>
                <Typography variant='h5'>{`Weight - ${pokeData['weight']}`}</Typography>
                <Typography variant='h5'>{`Height - ${pokeData['height']}`}</Typography>
                {`Types- ${
                showPokemonType(pokeData['types']).map((type,index)=>( 
                    type
                    ))
                }`}
            </>
            }
            </Paper>
        </div> 
        </>
    );
}
export default Pokemon;