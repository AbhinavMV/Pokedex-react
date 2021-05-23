//files
import { Button, CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { Pagination } from '@material-ui/lab';

import Appbar from '../Components/Appbar';
import { PokemonCard } from '../Components/PokemonCard';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin:'auto',

    }

}))
const Pokedex = (props) => {
    // const history = props.history;
    const classes = useStyles();
    const [search, setSearch] = useState('')
    const [allPokemon,setAllPokemon] = useState([])
    const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=100')
    const [isLoading,setIsLoading] = useState(false)
    

    //---------------------------------------------------------------------------------------------
    const [pageNumber,setPageNumber] = useState(0)
    const pokemonsPerPage = 100
    const pagesVisited = pageNumber * pokemonsPerPage
    const noOfPages = Math.floor(1118/pokemonsPerPage)


    //---------------------------------------------------------------------------------------------

    const getType = (types) =>{
        let type = []
        types.map((obj)=>(
            type.push(obj['type']['name'])
        ))
        return type
    }
    const getAllPokemon = async () =>{
        console.log('getallfunction')
        setIsLoading(true)
        const res = await fetch(loadMore)
        const data = await res.json()
        setLoadMore(data.next)
        // count = data.count
        function createPokemonObject(result){
            result.forEach(async(pokemon)=>{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemon(currentList => [...currentList,data])
                // console.log(data)
            })
        }
        createPokemonObject(data.results)
        setIsLoading(false)
    }
    useEffect(() => {
        console.log('useefect')
        getAllPokemon()
    },[])
    // console.log(allPokemon.slice(pagesVisited,pagesVisited+pokemonsPerPage))

    const displayPokemons = allPokemon.slice(pagesVisited,pagesVisited+pokemonsPerPage).map((pokemon,index)=>(allPokemon[index].name.includes(search) && <PokemonCard key={index} name={pokemon.name} id={pokemon.id} types={getType(pokemon.types)} weight={pokemon.weight} height={pokemon.height} stats={pokemon.stats} url={pokemon.sprites}/>))


    return (
        <>
            <Appbar search={search} setSearch={setSearch} />
            <div style={{ padding: 50, overflowX: 'hidden' }}>
                <Grid
                    className={classes.root}
                    container
                    direction="row"
                    justify='flex-start'
                    alignItems="center"
                    alignContent='center'
                    wrap='wrap'
                    spacing={4}>
                        {
                            isLoading?
                            <CircularProgress style={{margin:'auto'}}/>:
                            displayPokemons
                        }
                        
                </Grid>
                <Pagination count={noOfPages} page={pageNumber+1} onChange={(event,value)=>{getAllPokemon();setPageNumber(value-1)}} style={{width:'fit-content',margin:'auto'}}/>
                {/* <Button >Load more</Button> */}
            </div>
        </>
    );
}
export default Pokedex;