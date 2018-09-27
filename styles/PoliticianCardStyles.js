import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    border-bottom: 0.5px solid #9A9A9A;
    padding: 0 35px 60px 16px;
    margin-bottom: 40px;
    justify-content: space-between;
    
    @media(max-width: 844px) {
        flex-direction: column;
        padding: 0 20px 30px 20px;
    }
`;

export const Data = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 844px) {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export const Photo = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 100px;
    margin-right: 28px;
    @media(max-width: 844px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const Name = styled.span`
    font-size: 30px;
    color: #5138BC;
    letter-spacing: 0.02em;
    font-weight: 500;
    margin-bottom: 16px;
    text-transform: uppercase;
    text-align: center;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetailText = styled.span`
    font-size: 20px;
    color: #705ACB;
    font-weight: 400;
`;

export const ExpensesText = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #5138BC;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 176px;
    height: 45px;
    border-radius: 4px;
    background-color: #FFD600;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    font-size: 17px;
    font-weight: 700;
    color: #242424;
`;

export const InformationIcon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    object-fit: contain;
`;