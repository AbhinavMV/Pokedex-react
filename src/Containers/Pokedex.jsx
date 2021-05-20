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
      display: 'flex',
        flexDirection: 'row',
flexWrap: 'wrap',


    //   marginLeft:100
    // paddingTop: 50,
    // [theme.breakpoints.only('xs')]:{
    //     paddingLeft:80,
    // },
    // [theme.breakpoints.up('sm')]:{
    //     paddingLeft:100,
    // },
    // },

    }
}
  ));

const Pokedex = (props) =>{
    // console.log(props)
    const history = props.history;
    const classes = useStyles();
    const [pokeData,setPokeData] = useState(undefined)
    const [search,setSearch] = useState('')
    // const arr = undefined  
    //url = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png
    console.log('main')
    useEffect(()=>{
        console.log('use Effect')
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then((response)=>{
            const {results} = response.data
            // console.log(results)
            setPokeData(results) 
        }
        )
        .catch()

    },[])
    
    // function handleData(){
    //     // console.log(pokeData)
    //     // let searchedData = undefined
    //     // if (search !== ''){
    //     // searchedData = pokeData.filter((obj)=>{
            
    //     //     if (obj['name'].search(search)) {
                
    //     //         console.log(search + obj)
    //     //         return obj
    //     //     }

    //     //     else return undefined
    //     // })
    //     // }else{
    //     //     searchedData=pokeData
    //     // }
    //     // console.log(searchedData)

    //     )
    //     console.log(pokeData)

        
    // }


    return(
        <>
            <Appbar search={search} setSearch={setSearch}/>
            <div style={{padding:50, overflowX:'hidden'}}>
            <Grid 
            className={classes.root}
            container 
            direction="row"
            justify = 'flex-start'
            alignItems="center" 
            alignContent='center'
            wrap='wrap'
            spacing={4}>

            {pokeData ?
            
            pokeData.map((obj,index)=>{

                const {name,url:pokeUrl} = obj;
                const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
                // console.log('function')
                return pokeData[index].name.includes(search) && <PokemonCard key={index} name={name} url={url} id={index+1} history={history} pokeUrl={pokeUrl}/>
                
            }
            
            )
            :<CircularProgress/>
            }


            </Grid>
            </div>
            {/* {pokeData && <PokemonGrid pokeData={pokeData}/>} */}
        </>
    );
}
export default Pokedex;