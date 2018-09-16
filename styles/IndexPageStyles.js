import styled from 'styled-components';

export const Logo = styled.img`
    width: 223px;
    height: 223px;
    object-fit: contain;
    margin-bottom: 30px;
`;

export const Title = styled.h2`
    font-size: 42px;
    color: #CC9C00;
    font-family: Roboto;
    font-weight: 800;
    margin: 0 0 10px 0;
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
`;

export const AboutText = styled.a`
    color: #4B4B4B;
    font-size: 17px;
    font-family: Roboto;
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
    flex-direction: column;
    align-items: center;
`;