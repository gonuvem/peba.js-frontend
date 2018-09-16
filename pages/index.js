import React, { Component } from 'react';
import { Header, Search, Map, Footer } from '../components';
import styled from 'styled-components';

const logo = require('../static/images/peba_logo.png');

const Logo = styled.img`
    width: 223px;
    height: 223px;
    object-fit: contain;
    margin-bottom: 30px
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column
`;

const Title = styled.h2`
    font-size: 42px;
    color: #CC9C00;
    font-family: Roboto;
    font-weight: 800;
    margin: 0 0 10px 0;
`;

const TitleContainer = styled.div`
    width: 100%;
    border-bottom: 3px solid #CC9C00;
    margin-bottom: 10px;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 20%
`;

const AboutText = styled.a`
    color: #4B4B4B;
    font-size: 17px;
    font-family: Roboto
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
`;

export default class Initial extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Logo src={logo}/>
                    <Search />
                </Header>
                <Content>
                    <Section>
                        <TitleContainer>
                            <Title>Sobre o projeto</Title>
                        </TitleContainer>
                        <AboutText>
                        PEBA é um projeto Open Source idealizado pelo Teresina Hacker Clube
                         e que está sendo mantido atualmente pela GoNuvem. Ele é um indexador 
                         de dados públicos, no qual você eleitor, pode buscar por informações 
                         sobre politicos. Com isso esperamos que você consiga acompanhar e que 
                         te ajude a entender como nossos impostos estão sendo gastos pela classe 
                         política.
                        </AboutText>
                    </Section>
                    <Section>
                        <TitleContainer>
                            <Title>Escolha por estado</Title>
                        </TitleContainer>
                        <MapContainer>
                            <Map ref='map'/>
                        </MapContainer>
                    </Section>
                </Content>
                <Footer />
            </Container>
        );
    }
}