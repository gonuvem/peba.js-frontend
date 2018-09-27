import styled from 'styled-components';

export const TextInput = styled.input`
    width: 90%;
    border: none;
    color: #707070;
    font-size: 17px;
    font-weight: 500;
    outline: none;

    @media(max-width: 370px) {
        font-size: 13px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;
    background-color: white;
    max-width: 575px;
    width: 100%;
    height: 35px;
    border-radius: 4px;
    padding: 0 15px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);   
`;

export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    @media(max-width: 844px) {
        margin-top: ${props => props.marginTopOnMobile};
    }
`;

export const ExplanationText = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #B5B5B5;
    margin: 0;
    @media(max-width: 370px) {
        font-size: 10px;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    max-width: 575px;
`;
