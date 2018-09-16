import styled from 'styled-components';

export const BackgroundView = styled.div`
    width: 100%;
    height: 136px;
    background-image: linear-gradient(94deg, #313131, #2F2F2F);
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    bottom: 0
`;

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    padding: 0 20%;
    align-items: center;
    justify-content: space-between
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 87px
`;

export const Title = styled.span`
    color: #CC9C00;
    font-size: 17px;
    letter-spacing: 0.15em;
    font=family: Roboto;
    font-weight: 500;
    margin-bottom: 10px
`;

export const LogosContainer = styled.div`
    display: flex;
    align-items: flex-start
`;

export const GoNuvemLogo = styled.img`
    width: 105px;
    height: 55px;
    object-fit: contain
`;

export const THCLogo = styled.img`
    width: 55px;
    height: 54px;
    margin-right: 5px;
    object-fit: contain
`;

export const About = styled.p`
    max-width: 298px;
    font-size: 14px;
    color: #B4B4B4;
    font-family: Roboto;
    font-weight: 300;
    letter-spacing: 0.015em;
    margin: 0
`;

export const SocialMediaIcon = {
    'fill': '#CC9C00',
    'width': 25,
    'height': 25,
    'marginRight': 16
};