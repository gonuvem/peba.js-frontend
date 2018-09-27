import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 55px 20% 0 20%;
    align-items: center;
    
    @media(max-width: 844px) {
        padding: 35px 20px 0px 20px;
    }
`;

export const ResultText = styled.p`
    text-align: center;
    margin: 0;
    font-size: 27px;
    font-weight: 500;
    color: #313131;
    letter-spacing: 0.02em;

    @media(max-width: 844px) {
        font-size: 20px;
    }
`;

export const EvidenceText = styled.span`
    font-weight: 700;
    color: #CC9C00;
`;