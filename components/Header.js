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
    OpenMenu,
    CloseMenu,
    Navbar
} from '../styles//HeaderStyles';
import { pebaLogoNavbar, headerLinks } from '../general/Constants';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.onMenuOpen = this.onMenuOpen.bind(this);
        this.onMenuClose = this.onMenuClose.bind(this);
        this.navbarRef = (element) => {
            this.navbar = element;
          }
    }

    onMenuOpen = () => {
        this.navbar.style.left = '0';
    }

    onMenuClose = () => {
        this.navbar.style.left = '-100%';
    }

    render() {
        return (
            <BackgroundView>
                <Container>
                    <OpenMenu className='fas fa-bars' onClick={this.onMenuOpen} />
                    <Navbar innerRef={this.navbarRef}>
                        <TopBar>
                            <Logo src={pebaLogoNavbar} />
                            <CloseMenu className='fas fa-bars' onClick={this.onMenuClose} />
                            <Wrapper>
                                <LinksList>
                                    {
                                        headerLinks.map((element, index) => (
                                            <Link key={index} href={element.href} as={element.as}>
                                                <HeaderLink><li>{element.name}</li></HeaderLink>
                                            </Link>
                                        ))
                                    }
                                </LinksList>          
                                <GithubButton/>
                            </Wrapper>    
                        </TopBar>
                    </Navbar>
                    {this.props.children}
                </Container>
            </BackgroundView>
        );
    }
}