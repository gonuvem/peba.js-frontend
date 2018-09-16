import styled from 'styled-components';
import { header_bg } from '../general/Constants';

export const BackgroundView = styled.div`
    width: 100%;
    background-image: url(${header_bg});
    background-repeat: no-repeat;
    background-position: center;
`;

export const Container = styled.div`
    padding: 0 20% 67px 20%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 59px;
    height: 39px;
    object-fit: contain;
    margin-right: 29px
`;

export const LinksList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
`;

export const HeaderLinks = styled.a`
    text-decoration: none;
    color: #B5B5B5;
    font-size: 14px;
    font-family: Roboto Medium;
    margin-right: 22px
`;

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 67px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center
`;