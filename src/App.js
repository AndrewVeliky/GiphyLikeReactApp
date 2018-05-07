import React, { Component } from 'react';
import './App.css';
import Gif from './Gif';
import Header from './Header';
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchValue: "",
      limit: 12,
      category: "Trending"
    };
    this.printGifs = this.printGifs.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
    this.getTrending = this.getTrending.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  setInitialValue(event){
    this.setState({
      searchValue: event.target.value,
    });
  }

  componentDidMount() {
    this.getTrending();
  }

  getTrending(){
    window.fetch("https://api.giphy.com/v1/gifs/trending?api_key=gY4KVEKSamCEJ6W1l7VGLRStGR0usw2M&limit=12")
          .then(response => response.json())
          .then(gifs => this.setState({data: gifs.data.map(gif => 
            [gif.images.fixed_height.url, gif.title, gif.images.fixed_height_still.width])}));
  }

  handleSearchChange(event) {
    this.setState({value: event.target.value});
  }

  searchGifs(){
    if(this.state.searchValue !== ""){
      window.fetch(`https://api.giphy.com/v1/gifs/search?api_key=gY4KVEKSamCEJ6W1l7VGLRStGR0usw2M&limit=12&q=${this.state.searchValue}`)
          .then(response => response.json())
          .then(gifs => this.setState({
            data: gifs.data.map(gif => 
              [gif.images.fixed_height.url, gif.title, gif.images.fixed_height_still.width]),
            category: this.state.searchValue
        }));
    } else {
      this.getTrending();
    }
  }
/////////////////// add showMore functionality
  showMore(){
    let newData = this.state.data.slice();
    let limitValue = this.state.limit;

    if(this.state.searchValue === ""){

      window.fetch(`https://api.giphy.com/v1/gifs/trending?api_key=gY4KVEKSamCEJ6W1l7VGLRStGR0usw2M&limit=${this.state.limit + 12}&offset=${limitValue}`)
          .then(response => response.json())
          .then(pic => {
            const newGifs = pic.data.map(picture => 
              [picture.images.fixed_height.url, picture.title, picture.images.fixed_height_still.width]);
              newData.concat(newGifs);
          });
    }
    this.setState({data: newData,
                  limit: limitValue + 12
    });
  }

  printGifs(){
    const showedGifs = this.state.data.map(element => {
      return <Gif src={element[0]} title={element[1]} width={element[2]} className="gif"/>
    });
    
    return showedGifs;
  }

  render() {
    return (
      <Grid bsClass="container" fluid={false}>
        <Header />
        <Row className="show-grid">
        <FormControl 
          className="search-bar" 
          type="text"
          value={this.state.searchValue}
          placeholder = "start type the name of GIF you wanted"
          onChange={event => this.setInitialValue(event)} />
        <Button onClick={this.searchGifs} bsStyle="info">SEARCH</Button>
        <div>{this.state.category}</div>
          {this.printGifs()}
        </Row>
        <Button onClick={this.showMore}>SHOW MORE</Button>
      </Grid>
      
    );
  }
}

export default App;
