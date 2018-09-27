import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 47px auto;
    padding: 0 20px;

    @media(max-width: 720px) {
        display: none;
    }
`;

export const LettersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`;

export const ControllerIconContainer = styled.div`
    width: 10px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Page = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 8px;
    font-size: 27px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    color: ${props => props.fontColor};
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
`;

export const Select = styled.div`
    width: 100%;
    height: 28px;
    border-radius: 4px;
    
    select {
        background-color: #FFFFFF;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);   
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        color: #707070;
        font-weight: 400;
        font-size: 13px;
    }
`;

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 0 20px;
    
    @media(min-width: 721px) {
        display: none;
    }
`;

export const SelectHint = styled.p`
    color: #989898;
    font-size: 11px;
    font-weight: 400;
`;
