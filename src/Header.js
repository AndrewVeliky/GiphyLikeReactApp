import React, { Component } from 'react';
import './Main.css';
import PageHeader from 'react-bootstrap/lib/PageHeader';


export default class Header extends Component {

    render(){
        return (
            <PageHeader>
                {this.props.text}
            </PageHeader>
        );
    }
}


Header.defaultProps = {
    text: "Gif Search"
}