import React,{Component} from "react";
import Navbar from "./components/layout/Navbar";
import './App.css';
import Movies from "./components/movies/Movies";
import Movie from "./components/movies/Movie";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export class App extends Component {
  state={
       movies:[],
       loading:false,
       movie:{}
  }

  async componentDidMount(){
    this.setState({loading:true});
    const res=await axios.get("https://api.tvmaze.com/search/shows?q=all");
    this.setState({movies:res.data , loading:false});
  }

  getMovie = async ({movie,loading}) => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    this.setState({ movie:res.data, loading:false });
  };


  render(){
    return (
      <Router>
        <div className="App container">
        </div>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path='/' element={<>
            <Movies movies={this.state.movies} loading={this.state.loading}/>  
            </>}
          />
          </Routes>
          <Routes>
          <Route path='/movie/:login' element={
            <Movie/>
          }/>
          </Routes>
        </div>
      </Router>
  );
  } 
  
}

export default App;
