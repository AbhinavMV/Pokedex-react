//libraries
import {Route,Switch} from 'react-router-dom';
//files
import Pokemon from './Containers/Pokemon';
import Pokedex from './Containers/Pokedex';

function App() {
  // const [pokeData,setPokeData] = useState(undefined)
  return (
    <Switch>
      <Route exact path='/' render={(props)=>(<Pokedex {...props}/>)}/>
      <Route exact path='/pokemon/:id' component={Pokemon}/>
    </Switch>
  );
}

export default App;
