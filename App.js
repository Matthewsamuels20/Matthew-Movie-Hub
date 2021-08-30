import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from '@material-ui/core';
import './App.css';
import Header from './Header';
import SimpleBottomNavigation from './MainNav';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
