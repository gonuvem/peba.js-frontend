import React, { Component } from 'react';
import { Header, Search } from '../Components';
import styled from 'styled-components';

const logo = require('../Assets/images/peba_logo.png');

const Logo = styled.img`
    width: 223px;
    height: 223px;
    object-fit: contain;
    margin-bottom: 30px
`;

export default class Initial extends Component {

    render() {
        return (
            <Header>
                <Logo src={logo}/>
                <Search />
            </Header>
        );
    }
}