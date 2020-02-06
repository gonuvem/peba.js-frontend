import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg'
import { useRouter } from 'next/router';
import { Layout, SearchBar } from '../components';
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
import { pebaLogo, map, states } from '../general/Constants';
import api from '../general/Api';

const HeaderContent = () => (
    <HeaderContainer>
        <Logo alt='Peba logo' src={pebaLogo} />
        <SearchBar marginTopOnMobile={0} />
    </HeaderContainer>
);

const Initial = () => {
    const router = useRouter();
    useEffect(() => {
        api.get('deputados');
    }, []);

    const addStateActions = (err, element) => {
        const svgStates = element.getElementsByClassName('c');
        console.log({ svgStates })
        Array.from(svgStates).forEach((el, index) => {
            el.addEventListener('click', () => {
                router.push({
                    pathname: `/search`,
                    query: {
                        //terms: states[index].fullName,
                        state: states[index].abbreviation
                    },
                }).then(() => window.scrollTo(0, 0));
            })
        })
    }

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
                        <ReactSVG src={map} afterInjection={addStateActions} className='map'/>
                    </MapContainer>
                </Section>
            </Content>
        </Layout>
    );
}

export default Initial;
