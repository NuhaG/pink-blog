import Navbar from "./Navbar";
import BlogDetails from "./blogDetails";
import Create from "./create";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./notFound";

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
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// Run:
// npx json-server --watch data/db.json --port 8000
// npm run start
