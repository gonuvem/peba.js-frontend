import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import Github from './GithubButton';
import {
    BackgroundView,
    Container,
    Section,
    Title,
    LogosContainer,
    THCLogo,
    GoNuvemLogo,
    About,
    SocialMediaIcon
} from '../styles/FooterStyles';

import {
    thcLogo,
    gnLogo,
    faceIcon,
    instaIcon
} from '../general/Constants';

export default class Footer extends PureComponent {

    render() {
        return(
            <BackgroundView>
                <Container>
                    <Section>
                        <Title>APOIADORES</Title>
                        <LogosContainer>
                            <a href='http://www.teresinahc.org' target='_blank'>
                                <THCLogo src={thcLogo} />
                            </a>
                            <a href='http://www.gonuvem.com.br' target='_blank'>
                                <GoNuvemLogo src={gnLogo}/>
                            </a>
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
                            <a href='#' target='_blank'>
                                <ReactSVG src={instaIcon} style={SocialMediaIcon}/>
                            </a>
                            <a href='#' target='_blank'>
                                <ReactSVG src={faceIcon} style={SocialMediaIcon}/>
                            </a>
                        </LogosContainer>
                    </Section>
                    <Section>
                        <Title>CONTRIBUA</Title>
                        <Github/>
                    </Section>
                </Container>
            </BackgroundView>
        );
    }
}