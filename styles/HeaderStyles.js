import styled from 'styled-components';
import { header_bg } from '../general/Constants';

export const BackgroundView = styled.div`
    position: relative;
    width: 100%;
    background-image: url(${header_bg});
    background-position: center;
`;

export const Container = styled.div`
    padding: 0 20% 67px 20%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 844px) {
        padding: 0px 20px 10px 20px;
    }

    @media(min-width: 845px) and (max-width: 1068px) {
        padding-top: 50px;
    }
`;

export const Logo = styled.img`
    width: 59px;
    height: 39px;
    object-fit: contain;
    margin-right: 29px;

    @media(max-width: 1068px) {
        margin: 0;
        width: 82px;
        height: 82px;
    }
`;

export const LinksList = styled.ul`
    padding: 0;
    display: flex;
    list-style: none;
    @media(max-width: 1068px) {
        flex-direction: column;
        margin: 0 0 10px 0;
    }
`;

export const Navbar = styled.nav`
    padding: 0;
    margin: 0;
    width: 100%;
    
    @media(max-width: 1068px) {
        background-color: #313131;
        height: 100%;
        width: 100%;

        position: fixed;
        z-index: 2;
        top: 0;
        left: -100%;

        transition: left 0.3s ease-out;
    }
`;

export const HeaderLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #B5B5B5;
    font-size: 14px;
    font-weight: 500;
    margin-right: 22px;
    
    @media(max-width: 1068px) {
        padding: 10px 0;
        border-bottom: 1px solid #707070;
        margin-right: 0;
        width: 176px;
    }
`;

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 67px;
    @media(max-width: 1068px) {
        position: relative;
        flex-direction: column;
        margin: 0;
        padding: 0 20px;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;

    @media(max-width: 1068px) {
        position: relative;
        border-top: 1px solid #707070;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        height: auto;
        align-items: flex-start;
    }
`;

export const OpenMenu = styled.i`
    display: block;
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 20px;
    color: white;
    cursor: pointer;

    @media(min-width: 1068px) {
        display: none
    }
`;

export const CloseMenu = styled.i`
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 20px;
    color: white;
    cursor: pointer;

    @media(min-width: 1068px) {
        display: none
    }
`;