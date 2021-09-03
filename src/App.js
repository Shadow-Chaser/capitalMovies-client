import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './components/MovieDetails/MovieDetails';
export const MovieContext = createContext();
const one = "https://api.themoviedb.org/3/movie/popular?api_key=81e0b3d9d2419efbd8f55d937ddca8e0&language=en-US&page=1"
const two = "https://api.themoviedb.org/3/movie/now_playing?api_key=81e0b3d9d2419efbd8f55d937ddca8e0&language=en-US&page=1"


function App() {
  const [movies, setMovies] = useState({ popular: [], latest: [], favorites: [] })

  useEffect(() => {
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0].data.results;
      const responseTwo = responses[1].data.results;
      let newMovies = { ...movies };
      newMovies.popular = responseOne;
      newMovies.latest = responseTwo;
      setMovies(newMovies);
    })).catch(errors => {
      console.log(errors);
    })
  }, [])

  // console.log(movies);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/movie/:id'>
              <MovieDetails />
            </Route>


            <Route path='/login'>
              {/* <Login /> */}
            </Route>

            <Route path='/register'>
              {/* <Register /> */}
            </Route>
          </Switch>
        </Router>
    </div>
    </MovieContext.Provider>
  );
}

export default App;
