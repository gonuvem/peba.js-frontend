import styled from 'styled-components';

export const PieChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 425px;
    max-height: 586px;
    align-items: center;
    padding: 15px;
`;

export const ChartTitle = styled.span`
    font-size: 21px;
    color: #747474;
    font-weight: 700;
    margin-bottom: 31px;
    text-align: center;
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
`;

export const ChairChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 611px;
    max-height: 479px;
    align-items: center;
    padding: 15px;
`;

export const ChairWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 12%;
    margin: 41px 0;
`;

export const ChairIcon = styled.img`
    width: calc(100% / 8);
    margin-bottom: 10px;
`;

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 6px;
`;

export const LegendContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 12%;
    flex-direction: column;
    align-items: flex-start;
`;

export const LegendLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 6px 0;
`;

export const LegendName = styled.span`
    color: #676767;
    font-size: 17px;
    font-weight: 500;
`;

export const LegendValue = styled.span`
    font-weight: 300;
`;

export const ChairLegendWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 38px;
`;

export const ChairLegendLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
