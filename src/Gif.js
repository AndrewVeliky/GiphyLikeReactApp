import React, { Component } from 'react';
import Col  from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Gif extends Component {    
    render() {
      return (
        <MuiThemeProvider>  
          <Col xs={12} md={4} lg={3}>
            <Card >
            <CardMedia
                overlay={<CardTitle subtitle={this.props.title} />}
                actAsExpander={true}
            >
              <Image 
                src={this.props.src} 
                className="center-block"
                responsive/>
              </CardMedia>
              <CardText expandable={true} >
                  <a href={this.props.src} download className="download-btn"><i className="fa fa-download"></i> Download</a>
              </CardText>
            </Card>
          </Col>
        </MuiThemeProvider>
      );
    }
  }


