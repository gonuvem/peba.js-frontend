import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center
    
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain
`;

const LinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60%;
    flex-direction: row;
    list-style: none;
`;

const HeaderLinks = styled.a`
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 1em
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: red
`;

export default class Header extends Component {

    render() {
        return (
            <Container>
                <TopBar>
                    <Logo src='http://www.mae-da-lua.org/photos/euphractus_sexcinctus_01.jpg' />
                    <LinksList>
                        <HeaderLinks href='#'><li>Início</li></HeaderLinks>
                        <HeaderLinks href='#'><li>Sobre o projeto</li></HeaderLinks>
                        <HeaderLinks href='#'><li>Escolha por estado</li></HeaderLinks>
                        <HeaderLinks href='#'><li>Dicionário</li></HeaderLinks>
                    </LinksList>              
                </TopBar>
                <img src='http://www.mae-da-lua.org/photos/euphractus_sexcinctus_01.jpg' style={{width: 200, height: 200, objectFit: 'contain' }}/>
            </Container>
        );
    }
}