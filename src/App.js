import Navbar from './Navbar';
import BlogDetails from './blogDetails';
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id"> {/*used so that it changes with each component*/}
            <BlogDetails />
          </Route>
        </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
