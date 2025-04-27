import Navbar from './Navbar';
import Create from './create';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"> {/*exact is used so that any other path including / does not display th home page*/}
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch> {/*this approach sends each call it to the server*/}
     </div>
    </div>
    </Router>
  );
}

export default App;
