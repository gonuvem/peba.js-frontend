import styled from 'styled-components';

export const PieChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 500px;
    align-items: center;
    padding: 15px;
    margin: 50px 0;

`;

export const PieContent = styled.div`
    display: flex;

    @media(max-width: 1627px) {
        flex-direction: column-reverse;
    }

    @media(max-width: 1627px) and (min-width: 845px) {
        width: 100%;
    }
`;

export const PieContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const PieChartWrapper = styled.div`
    max-width: 485px;
    max-height: 485px;
    width: 90%;
    height: 90%;
`;

export const PieLegendContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 60px;

    @media(max-width: 1627px) and (min-width: 845px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const PieLegendLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;
    
    @media(max-width: 1627px) and (min-width: 845px) {
        width: 50%;
        
    }
`;

export const LegendBox = styled.div`
    background-color: ${props => props.color};
    width: 30px !important;
    height: 10px;
    margin-right: 15px;
`;

export const PieLegendText = styled.span`
    font-size: 17;
    max-width: 90%;
    color: '#747474';
    font-family: 'Roboto';
    padding: 21;

    @media(max-width: 1620px) {
        max-width: 80%;
    }
`;

export const ChairContent = styled.div`
    display: flex;
    width: 100%;
    min-height: 240px;

    @media(max-width: 1375px) {
        flex-direction: column-reverse;
    }
`;

export const ChairLegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    justify-content: flex-start;
    align-items: center;

    @media(min-width: 1375px) and (max-width: 1679px) {
        flex: 4;
    }

    @media(min-width: 670px) and (max-width: 1375px) {
        flex: 1;
    }
`;

export const TilesContainer = styled.div`
    display: flex;
    flex: 5;
    min-height: 100%;
    flex-wrap: wrap;
    @media(min-width: 1375px) and (max-width: 1679px) {
        flex: 6;
    }

    @media(min-width: 1001px) and (max-width: 1375px) {
        flex: 1;
        justify-content: space-between;
        margin-top: 30px;
    }

    @media(max-width: 1000px) {
        flex: 1;
        justify-content: space-between;
        margin-top: 30px;
    }

    @media(max-width: 669px) {
        flex: 1;
        justify-content: center;
        margin-top: 30px;
    }
`;

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 40%;
    height: 97px;
    border-radius: 4px;
    margin-right: 42px;
    background-color: white;
    border-left: 7px solid ${props => props.borderColor};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    @media(min-width: 1000px) and (max-width: 1375px) {
        width: 22%;
        margin-right: 0;
    }

    @media(min-width: 670px) and (max-width: 1000px) {
        width: 40%;
        margin-bottom: 20px;
        margin-right: 0;
    }

    @media(max-width: 669px) {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 0;
    }
`;

export const TileTitle = styled.span`
    font-weight: 700;
    color: #707070;
    font-size: 17.5px;
`;

export const TileValue = styled.span`
    color: ${props => props.color};
    font-weight: 500;
    padding-left: 10px;
    font-size: 17.5px;
    letter-spacing: 0.02em;
`;

export const ChartTitle = styled.span`
    font-size: 21px;
    color: #747474;
    font-weight: 700;
    margin-bottom: 31px;
    text-align: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const VerticalBarChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    align-items: center;
    padding-bottom: 70px;
`;

export const HorizontalBarChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    align-items: center;
    padding-bottom: 70px;
    margin: 45px 0;
`;

export const ChairChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 300px;
    align-items: center;
    padding: 15px;

    @media(max-width: 1375px) {
        display: -moz-box;
        min-height: 479px;
    }
`;

export const ChairWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 424px;
    margin-bottom: 22px;
`;

export const ChairIcon = styled.img`
    width: calc(100% / 8);
    margin-bottom: 10px;
    max-width: 53px;
`;

export const ChairLegendWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 466px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: auto;
    }
`;

export const ChairLegendLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    @media(max-width: 466px) {
        margin-bottom: 15px;
    }
`;

export const ChairIco = styled.img`
    width: 37px;
    margin-right: 12px;
`;

export const ChairLegendText = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #747474;
`;
