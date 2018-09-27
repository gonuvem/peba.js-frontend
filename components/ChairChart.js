import React, { PureComponent } from 'react';
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
    TileValue
} from '../styles/ChartStyles';
import {
    greenChair,
    redChair,
    yellowChair
} from '../general/Constants';

export default class ChairChart extends PureComponent {

    constructor(props) {
        super(props);
        if(this.props.frequency) {
            this.presence = Math.round((this.props.frequency.presence/this.props.frequency.total)*20);
            this.justifiedAbsence = Math.round((this.props.frequency.justifiedAbsence/this.props.frequency.total)*20);
            this.unjustifiedAbsence = Math.round((this.props.frequency.unjustifiedAbsence/this.props.frequency.total)*20);

            this.legend = [
                {
                    color: '#97C7F6',
                    name: 'Total de sessões',
                    value: this.props.frequency.total
                },
                {
                    color: '#00B894',
                    name: 'Presenças confirmadas',
                    value: this.props.frequency.presence
                },
                {
                    color: '#A07A00',
                    name: 'Ausências justificadas',
                    value: this.props.frequency.justifiedAbsence
                },
                {
                    color: '#E17055',
                    name: 'Ausências não justificadas',
                    value: this.props.frequency.unjustifiedAbsence
                },
            ];

            this.chairLegend = [
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
        }
    }


    render() {
        return(
            this.props.frequency ?
                <ChairChartContainer>
                    <ChartTitle>{this.props.title}</ChartTitle>
                    <ChairContent>
                        <TilesContainer>    
                            { this.legend.map((element, index) => (
                                <Tile borderColor={element.color}>
                                    <TileTitle>{`${element.name}:`}</TileTitle>
                                    <TileValue color={element.color}>{`${element.value} seções`}</TileValue>
                                </Tile>
                            ))}
                        </TilesContainer>
                        <ChairLegendContainer>
                            <ChairWrapper>
                                {Array(this.presence).fill(0).map((element, index) => (
                                    <ChairIcon key={index} src={greenChair} />
                                ))}
                                {Array(this.justifiedAbsence).fill(0).map((element, index) => (
                                    <ChairIcon key={index} src={yellowChair} />
                                ))}
                                {Array(this.unjustifiedAbsence).fill(0).map((element, index) => (
                                    <ChairIcon key={index} src={redChair} />
                                ))}
                            </ChairWrapper>
                            <ChairLegendWrapper>
                                {
                                    this.chairLegend.map((element, index) => (
                                        <ChairLegendLine key={index}>
                                            <ChairIco src={element.chair} />
                                            <ChairLegendText>{element.title}</ChairLegendText>
                                        </ChairLegendLine>
                                    ))
                                }
                            </ChairLegendWrapper>
                        </ChairLegendContainer>
                    </ChairContent>
                </ChairChartContainer>
            :
            <ChairChartContainer>
                <ChartTitle>Frequência não informada</ChartTitle>
            </ChairChartContainer>
        );
    }
}

/**
 *   <LegendContainer>
                        {
                            this.legend.map((element, index) => (
                                <LegendLine key={index}>
                                    <Dot backgroundColor={element.color} />
                                    <LegendName>
                                        {element.name} <LegendValue>{element.value} sessões</LegendValue>
                                    </LegendName>
                                </LegendLine>
                            ))
                        }
                    </LegendContainer>
 * 
 */