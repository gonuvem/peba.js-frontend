import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 45px 0;
`;

export const TableWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const Table = styled.table`
    border-collapse: collapse;
    padding: 30px;
`;

export const TableLine = styled.tr`
    width: 100%;
    height: 45px;
    border-bottom: 0.5px solid #C9C9C9;
`;

export const TableHeader = styled.th`
    font-size: 17px;
    font-weight: 700;
    color: #747474;
    border-bottom: 0.5px solid #C9C9C9;
`;

export const Data = styled.span`
    font-size: 17px;
    font-weight: 400;
    color: #747474;
    text-transform: uppercase;
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
`;

export const Provider = styled.td`
    width: 45%;
    padding-left: 30px;
`;

export const DateString = styled.td`
    width: 10%;
`;

export const Kind = styled.td`
    width: 35%;
`;

export const Value = styled.td`
    width: 10%;
    padding-right: 30px;
`;