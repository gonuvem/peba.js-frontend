import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 67px;
`;

export const Photo = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 100px;
    margin-bottom: 15px;
`;

export const Informations = styled.span`
    font-size: 30px;
    color: #FAFAFA;
    font-weight: 500;
    text-align: center;
`;

export const Email = styled.span`
    font-size: 17px;
    color: #CC9C00;
    font-weight: 400;
`;

export const EmailContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const EmailIcon = styled.img`
    height: 15px;
    object-fit: contain;
    margin-right: 5px;
`;

export const ExpensesContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.35);
`;

export const Expenses = styled.span`
    font-size: 30px;
    font-weight: 400;
    color: white;
    text-align: center;
`;

export const SinceDate = styled.span`
    font-size: 15px;
    font-weight: 400px;
    text-align: center;
    color: white;
`;

export const Container = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 55px 20% 0 20%;
    align-items: center;
`;

export const ChartsLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;