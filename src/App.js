import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch> {/*makes sure that only one route shows at one time*/}
     </div>
    </div>
    </Router>
  );
}

export default App;
