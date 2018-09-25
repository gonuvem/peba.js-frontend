import styled from 'styled-components';

export const Logo = styled.img`
    width: 223px;
    height: 223px;
    object-fit: contain;
    margin-bottom: 30px;
    @media(max-width: 844px) {
        width: 83px;
        height: 83px;
        margin-top: 25px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5em;
    color: #CC9C00;
    font-weight: 700;
    margin: 0 0 10px 0;
    
    @media(max-width: 844px) {
        font-size: 1.3em
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    border-bottom: 3px solid #CC9C00;
    margin-bottom: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 20%;
    @media(max-width: 844px) {
        padding: 20px;
    }
`;

export const AboutText = styled.a`
    color: #4B4B4B;
    font-size: 17px;
    font-weight: 400;
    @media(max-width: 844px) {
        font-size: .8em
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const ErrorMessage = styled.div`
    font-size: 2em;
    font-weight: 500;
    text-align: center;
    @media(max-width: 844px) {
        font-size: 1.2em;
    }
`;