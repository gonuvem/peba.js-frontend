import React, { Component } from 'react';
import GithubButton from './GithubButton';
import Link from 'next/link';
import { 
    BackgroundView,
    Container,
    TopBar,
    Wrapper,
    Logo,
    LinksList,
    HeaderLink,
} from '../styles//HeaderStyles';
import { pebaLogoNavbar, headerLinks } from '../general/Constants';

export default class Header extends Component {
    render() {
        return (
            <BackgroundView>
                <Container>
                    <TopBar>
                        <Wrapper>
                            <Logo src={pebaLogoNavbar} />
                            <LinksList>
                                {
                                    headerLinks.map((element, index) => (
                                        <Link key={index} href={element.href} as={element.as}>
                                            <HeaderLink><li>{element.name}</li></HeaderLink>
                                        </Link>
                                    ))
                                }
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