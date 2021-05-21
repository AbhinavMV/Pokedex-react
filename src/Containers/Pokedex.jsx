//files
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Appbar from '../Components/Appbar';
import PokemonCard from '../Components/PokemonCard';
import { capitalise } from '../utils/Capitalise';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}))
const Pokedex = (props) => {
    const history = props.history;
    const classes = useStyles();
    const [pokeData, setPokeData] = useState(false)
    const [search, setSearch] = useState('')

    const handleRequest = async () => {
        await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then((response) => {
                const { results } = response.data
                console.log(response)
                setPokeData(results)
            }
            )
            .catch()

    }

    useEffect(() => {
        handleRequest()
    }, [])


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

                    {pokeData ?
                        pokeData.map((obj, index) => {

                            const { name, url: pokeUrl } = obj;
                            let newName = capitalise(name)
                            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
                            return pokeData[index].name.includes(search) && <PokemonCard key={index} name={newName} url={url} id={index + 1} history={history} pokeUrl={pokeUrl} />
                        }
                        )
                        : <CircularProgress style={{ margin: 'auto' }} />
                    }
                </Grid>
            </div>
        </>
    );
}
export default Pokedex;