//libraries
import {Route,Switch} from 'react-router-dom';
//files
import Pokemon from './Containers/Pokemon';
import Pokedex from './Containers/Pokedex';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Pokedex}/>
      <Route exact path='/pokemon/:id' component={Pokemon}/>
    </Switch>
  );
}

export default App;
