import React, { Component } from 'react';
import Col  from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';


export default class Gif extends Component {
    constructor(props){
      super(props);
    }
    
    render() {
      const signStyle ={
        maxWidth: `${this.props.width}px`
      };

      return (  
        <Col xs={6} md={4}>
          <div>
            <Image 
              src={this.props.src} 
              className="center-block"
              //need to add saving on click on the download button 
              responsive/>
            <div className="gif-sign" style={signStyle}>{this.props.title}</div>
          </div>
        </Col>
      );
    }
  }


