import React, { Component } from 'react';
import logo from "./logo.svg"
import './App.css';
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import Gallery from './components/Gallery';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      query: '',
      items:[]
        }
  }
  search(){
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q="
    fetch(`${API_URL}${this.state.query}`)
    .then(response => response.json())
    .then(json => {
      let {items} = json;
      this.setState({ items })
    }).catch((error) => console.log(error))
  }
  render(){
    return(
      <div className="App">
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'>Book Finder</h1>
        </header>
        <div className='container main-content'>
          <FormGroup>
            <InputGroup className='App-input'>
             <FormControl 
             onClick={event => this.setState({
              query:event.target.value
             })}
             onKeyPress={(event => {
              if('Enter' == event.key){
                this.search();
              }
             })
             }
             className='input' type='text' placeholder='search for a book'/>
              <SearchIcon />
            </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items} />
        </div>
      </div>
    )
  }
}

export default App;
