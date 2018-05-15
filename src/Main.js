import React, { Component } from 'react';
import './Main.css';
import Gif from './Gif';
import Header from './Header';
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchValue: "",
      offset: 12,
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

  showMore(){

    if(this.state.searchValue === ""){
      window.fetch(`https://api.giphy.com/v1/gifs/trending?api_key=gY4KVEKSamCEJ6W1l7VGLRStGR0usw2M&limit=12&offset=${this.state.offset}`)
          .then(response => response.json())
          .then(pic => {
            const newGifs = pic.data.map(picture => 
              [picture.images.fixed_height.url, picture.title, picture.images.fixed_height_still.width]);
              
              this.setState((prevState, props)=>({data: prevState.data.concat(newGifs),
                offset: prevState.offset + 12
              }));
              console.log(newGifs.length);
          });
          
    } else {
      window.fetch(`https://api.giphy.com/v1/gifs/search?api_key=gY4KVEKSamCEJ6W1l7VGLRStGR0usw2M&limit=12&offset=${this.state.offset}&q=${this.state.searchValue}`)
          .then(response => response.json())
          .then(pic => {
            const newGifs = pic.data.map(picture => 
              [picture.images.fixed_height.url, picture.title, picture.images.fixed_height_still.width]);
              this.setState((prevState, props)=>({data: prevState.data.concat(newGifs),
                offset: prevState.offset + 12
              }));
              
          });
    }
    
  }

  printGifs(){
    const showedGifs = this.state.data.map((element, index) => {
      return <Gif src={element[0]} title={element[1]} width={element[2]} key={index} className="gif"/>
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
        <Header text={this.state.category}/>
          {this.printGifs()}
        </Row>
        <Button className="show-more-btn" onClick={this.showMore}>SHOW MORE</Button>
      </Grid>
      
    );
  }
}

export default Main;
