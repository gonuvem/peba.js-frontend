import React, { Component } from 'react';
import GithubButton from './GithubButton';
import { 
    BackgroundView,
    Container,
    TopBar,
    Wrapper,
    Logo,
    LinksList,
    HeaderLinks,
} from '../styles//HeaderStyles';
import { pebaLogo } from '../general/Constants';

export default class Header extends Component {
    render() {
        return (
            <BackgroundView>
                <Container>
                    <TopBar>
                        <Wrapper>
                            <Logo src={pebaLogo} />
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