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

const HeaderContent = () => (
    <HeaderContainer>
        <Logo src={pebaLogo} />
        <SearchBar />
    </HeaderContainer>
);

export default class Initial extends Component {

    render() {
        return (
            <Layout headerContent={<HeaderContent />}>
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
            </Layout>
        );
    }
}