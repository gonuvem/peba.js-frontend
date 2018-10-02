import React, { Component } from 'react';
import { Map, Layout, SearchBar } from '../components';
import {
    Logo,
    Title,
    TitleContainer,
    Content,
    AboutText,
    Section,
    MapContainer,
    HeaderContainer
} from '../styles/IndexPageStyles';
import { pebaLogo } from '../general/Constants';
import API from '../general/Api';

const HeaderContent = () => (
    <HeaderContainer>
        <Logo src={pebaLogo} />
        <SearchBar marginTopOnMobile={0} />
    </HeaderContainer>
);

export default class Initial extends Component {

    componentDidMount() {
        API.get('deputados');
    }

    render() {
        return (
            <Layout headerContent={<HeaderContent />}>
                <Content>
                    <Section id='about'>
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
                    <Section id='map'>
                        <TitleContainer>
                            <Title>Escolha por estado</Title>
                        </TitleContainer>
                        <MapContainer>
                            <Map ref='map'/>
                        </MapContainer>
                    </Section>
                </Content>
            </Layout>
        );
    }
}