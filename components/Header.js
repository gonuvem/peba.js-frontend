import React, { useRef } from 'react';
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

const Header = ({ children }) => {
    const navbarRef = useRef();

    const onMenuOpen = () => {
        navbarRef.current.style.left = '0';
    }

    const onMenuClose = () => {
        navbarRef.current.style.left = '-100%';
    }

    return (
        <BackgroundView>
            <Container>
                <OpenMenu className='fas fa-bars' onClick={onMenuOpen} />
                <Navbar ref={navbarRef}>
                    <TopBar>
                        <Link href={'/'} as={'/'}>
                            <Logo alt='Logo Peba' src={pebaLogoNavbar} />
                        </Link>
                        <CloseMenu className='fas fa-arrow-left' onClick={onMenuClose} />
                        <Wrapper>
                            <LinksList>
                                {
                                    headerLinks.map((element, index) => (
                                        <Link key={index} href={element.href} as={element.as}>
                                            <HeaderLink onClick={onMenuClose}><li>{element.name}</li></HeaderLink>
                                        </Link>
                                    ))
                                }
                            </LinksList>          
                            <GithubButton/>
                        </Wrapper>    
                    </TopBar>
                </Navbar>
                {children}
            </Container>
        </BackgroundView>
    );
}

export default Header;
