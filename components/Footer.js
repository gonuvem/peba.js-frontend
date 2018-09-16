import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const thcLogo = require('../static/images/teresinahc.png');
const gnLogo = require('../static/images/gonuvem.png');
const faceIcon = require('../static/images/face-icon.svg');
const instaIcon = require('../static/images/insta-icon.svg');

const BackgroundView = styled.div`
    width: 100%;
    height: 136px;
    background-image: linear-gradient(94deg, #313131, #2F2F2F);
    background-repeat: no-repeat;
    background-position: center;
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    padding: 0 20%;
    align-items: center
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    height: 87px
`;

const Title = styled.span`
    color: #CC9C00;
    font-size: 17px;
    letter-spacing: 0.15em;
    font=family: Roboto;
    font-weight: 500;
    margin-bottom: 10px
`;

const LogosContainer = styled.div`
    display: flex;
    align-items: flex-start
`;

const GoNuvemLogo = styled.img`
    width: 105px;
    height: 55px;
    object-fit: contain
`;

const THCLogo = styled.img`
    width: 55px;
    height: 54px;
    margin-right: 5px;
    object-fit: contain
`;

const About = styled.p`
    max-width: 298px;
    font-size: 14px;
    color: #B4B4B4;
    font-family: Roboto;
    font-weight: 300;
    letter-spacing: 0.015em;
    margin: 0
`;

const SocialMediaIcon = {
    'fill': '#CC9C00',
    'width': 25,
    'height': 25,
    marginRight: 16
};

export default class Footer extends PureComponent {

    render() {
        return(
            <BackgroundView>
                <Container>
                    <Section>
                        <Title>APOIADORES</Title>
                        <LogosContainer>
                            <THCLogo src={thcLogo} />
                            <GoNuvemLogo src={gnLogo}/>
                        </LogosContainer>
                    </Section>
                    <Section>
                        <Title>SOBRE</Title>
                        <About>
                            PEBA é um projeto open-source, que indexa dados publicos sobre politicos.
                        </About>
                    </Section>
                    <Section>
                        <Title>CONTATO</Title>
                        <LogosContainer>
                            <ReactSVG src={instaIcon} style={SocialMediaIcon}/>
                            <ReactSVG src={faceIcon} style={SocialMediaIcon}/>
                        </LogosContainer>
                    </Section>
                </Container>
            </BackgroundView>
        );
    }
}