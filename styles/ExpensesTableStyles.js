import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 45px 0;
`;

export const TableWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    min-width: 100%;
    min-height: 500px;
    position: relative;
`;

export const Table = styled.table`
    border-collapse: collapse;
    padding: 30px;

    width: 100%;

    @media(max-width: 561px) {
        display: none;
    }
`;

export const ResponsiveTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 561px) {
        display: none;
    }
`;

export const Datum = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
`;

export const ResponsiveHeader = styled.div`
    font-size: 17px;
    font-weight: 700;
    color: #747474;
    display: flex;
    margin-right: 15px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ResponsiveLine = styled.div`
    padding: 20px;
    display: flex;
    width: 100%;
    min-height: 45px;
    border-bottom: 0.5px solid #C9C9C9;
    justify-content: center;
    align-items: center;
`;

export const ResponsiveData = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: #747474;
    text-transform: uppercase;
    display: flex;
    flex: 9;
    width: 100%;
    justify-content: center !important;
    align-items: center;
    text-align: center !important;
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
    width: 30%;
    padding-left: 30px;
`;

export const DateString = styled.td`
    width: 10%;
`;

export const Kind = styled.td`
    width: 45%;
`;

export const Value = styled.td`
    width: 15%;
    padding-right: 30px;
`;