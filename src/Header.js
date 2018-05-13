import React, { Component } from 'react';
import './Main.css';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Image from 'react-bootstrap/lib/Image';

export default class Header extends Component {

    render(){
        return (
            <PageHeader>
                Gif Search
            </PageHeader>
        );
    }
}
