import React from 'react';
import { ReactSVG } from 'react-svg'
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
    SocialMediaIcon,
    AboutSection
} from '../styles/FooterStyles';
import {
    thcLogo,
    gnLogo,
    faceIcon,
    instaIcon
} from '../general/Constants';

const Footer = () => {
    return(
        <BackgroundView>
            <Container>
                <Section>
                    <Title>APOIADORES</Title>
                    <LogosContainer>
                        <a href='http://www.teresinahc.org' target='_blank'>
                            <THCLogo alt='Logo Teresina Hacker Clube' src={thcLogo} />
                        </a>
                        <a href='https://gonuvem.com/' target='_blank'>
                            <GoNuvemLogo alt='Logo GoNuvem' src={gnLogo}/>
                        </a>
                    </LogosContainer>
                </Section>
                <AboutSection>
                    <Title>SOBRE</Title>
                    <About>
                        PEBA é um projeto open-source, que indexa dados publicos sobre politicos.
                    </About>
                </AboutSection>
                <Section>
                    <Title>CONTATO</Title>
                    <LogosContainer>
                        <a href='https://www.instagram.com/gonuvem/' target='_blank'>
                            <ReactSVG src={instaIcon} style={SocialMediaIcon}/>
                        </a>
                        {/* <a href='#' target='_blank'>
                            <ReactSVG src={faceIcon} style={SocialMediaIcon}/>
                        </a> */}
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

export default Footer;
