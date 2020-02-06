import React from 'react';
import {
    ChartTitle,
    ChairChartContainer,
    ChairWrapper,
    ChairIcon,
    ChairLegendWrapper,
    ChairLegendLine,
    ChairLegendText,
    ChairIco,
    ChairLegendContainer,
    ChairContent,
    TilesContainer,
    Tile,
    TileTitle,
    TileValue,
    TitleContainer
} from '../styles/ChartStyles';
import {
    greenChair,
    redChair,
    yellowChair
} from '../general/Constants';

const ChairChart = ({ frequency, title }) => {
    if(!frequency) {
        return (
            <ChairChartContainer>
                <ChartTitle>Frequência não informada</ChartTitle>
            </ChairChartContainer>
        );
    }

    const presence = Math.round((frequency.presence/frequency.total)*20);
    const justifiedAbsence = Math.round((frequency.justifiedAbsence/frequency.total)*20);
    const unjustifiedAbsence = Math.round((frequency.unjustifiedAbsence/frequency.total)*20);

    const legend = [
        {
            color: '#97C7F6',
            name: 'Total de sessões',
            value: frequency.total
        },
        {
            color: '#00B894',
            name: 'Presenças confirmadas',
            value: frequency.presence
        },
        {
            color: '#A07A00',
            name: 'Ausências justificadas',
            value: frequency.justifiedAbsence
        },
        {
            color: '#E17055',
            name: 'Ausências não justificadas',
            value: frequency.unjustifiedAbsence
        },
    ];

    const chairLegend = [
        {
            chair: greenChair,
            title: 'Presença confirmada'
        },
        {
            chair: yellowChair,
            title: 'Ausência justificada'
        },
        {
            chair: redChair,
            title: 'Ausência não justificada'
        }
    ];

    return(
        <ChairChartContainer>
            <TitleContainer>
                <ChartTitle>{title}</ChartTitle>
            </TitleContainer>
            <ChairContent>
                <TilesContainer>    
                    {legend.map((el, id) => (
                        <Tile key={id} borderColor={el.color}>
                            <TileTitle>{`${el.name}:`}</TileTitle>
                            <TileValue color={el.color}>{`${el.value} sessões`}</TileValue>
                        </Tile>
                    ))}
                </TilesContainer>
                <ChairLegendContainer>
                    <ChairWrapper>
                        {Array(presence).fill(0).map((_, id) => (
                            <ChairIcon alt='Cadeira verde' key={id} src={greenChair} />
                        ))}
                        {Array(justifiedAbsence).fill(0).map((_, id) => (
                            <ChairIcon alt='Cadeira amarela' key={id} src={yellowChair} />
                        ))}
                        {Array(unjustifiedAbsence).fill(0).map((_, id) => (
                            <ChairIcon alt='Cadeira vermelha' key={id} src={redChair} />
                        ))}
                    </ChairWrapper>
                    <ChairLegendWrapper>
                        {chairLegend.map((el, id) => (
                            <ChairLegendLine key={id}>
                                <ChairIco alt='Cadeira' src={el.chair} />
                                <ChairLegendText>{el.title}</ChairLegendText>
                            </ChairLegendLine>
                        ))}
                    </ChairLegendWrapper>
                </ChairLegendContainer>
            </ChairContent>
        </ChairChartContainer>
    );
};

export default ChairChart;
