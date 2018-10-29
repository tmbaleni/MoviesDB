import React, { Component } from 'react';
import $ from 'jquery';
import MovieRow from './MovieRow';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('My initializer');

    this.performSearch("avengers");



    this.state = {
    }
    
  }
  performSearch(searchTerm){
    console.log('using perform search with moviedb');

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=5d43ab086f55a2246d06f6995bf05210&query=" + searchTerm;

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        const results = searchResults.results;
        console.log(results);

        const movieRows = [];
        results.forEach((movie) => {
          movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        });
          this.setState({rows: movieRows});
           
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    })
  }
  searchChangeHandler(e){
    e.preventDefault();
    console.log(e.target.value);
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);

  }

  render() {
    return (
      <div className="App">
      <table className="titleBar">
      <tbody>
        <tr>
          <td>
            <img height='50' alt='logo' src="logo.png"/>
          </td>
          <td><h2>MoviesDB Search</h2></td>
        </tr>
      </tbody>
      </table>
      <input style={{
        fontSize: 24,
        display: 'block',
        width: '99%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter movie name"/>
      {this.state.rows}
      </div>
    );
  }
}

export default App;
