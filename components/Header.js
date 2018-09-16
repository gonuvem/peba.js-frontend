import React, { Component } from 'react';
import styled from 'styled-components';
import GithubButton from './GithubButton';

const header_bg = require('../Assets/images/header_bg.png');
const logo = require('../Assets/images/peba_logo_navbar.png');

const BackgroundView = styled.div`
    width: 100%;
    background-image: url(${header_bg});
    background-repeat: no-repeat;
    background-position: center;
`;

const Container = styled.div`
    padding: 0 20% 67px 20%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Logo = styled.img`
    width: 59px;
    height: 39px;
    object-fit: contain;
    margin-right: 29px
`;

const LinksList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
`;

const HeaderLinks = styled.a`
    text-decoration: none;
    color: #B5B5B5;
    font-size: 14px;
    font-family: Roboto Medium;
    margin-right: 22px
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 67px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center
`;

export default class Header extends Component {
    render() {
        return (
            <BackgroundView>
                <Container>
                    <TopBar>
                        <Wrapper>
                            <Logo src={logo} />
                            <LinksList>
                                <HeaderLinks href='#'><li>Início</li></HeaderLinks>
                                <HeaderLinks href='#'><li>Sobre o projeto</li></HeaderLinks>
                                <HeaderLinks href='#'><li>Escolha por estado</li></HeaderLinks>
                                <HeaderLinks href='#'><li>Dicionário</li></HeaderLinks>
                            </LinksList>              
                        </Wrapper>    
                        <GithubButton/>
                    </TopBar>
                    {this.props.children}
                </Container>
            </BackgroundView>
        );
    }
}