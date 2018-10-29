import React, { Component } from 'react';

class MovieRow extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }
  viewMovie(){
      console.log("Trying to view");
      console.log(this.props.movie.title)
      window.location.href="https://www.themoviedb.org/movie/" + this.props.movie.id;
  }
  render(){
    return <table>
    <tbody>
      <tr>
        <td>
          <img src={this.props.movie.poster_src} width='120' alt="poster"/>
        </td>
        <td>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.overview}</p>
        <input type="button" onClick={this.viewMovie.bind(this)} value="view"/>
        </td>
      </tr>
    </tbody>
  </table>
    }
}

export default MovieRow;