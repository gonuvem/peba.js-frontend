import React, { PureComponent } from 'react';
import {
    ChartTitle,
    ChairChartContainer,
    ChairWrapper,
    ChairIcon,
    Dot,
    LegendContainer,
    LegendLine,
    LegendName,
    LegendValue,
    ChairLegendWrapper,
    ChairLegendLine,
    ChairLegendText,
    ChairIco,

} from '../styles/ChartStyles';
import {
    greenChair,
    redChair,
    yellowChair
} from '../general/Constants';

export default class ChairChart extends PureComponent {

    constructor(props) {
        super(props);
        this.presence = Math.round((this.props.presence/this.props.total)*20);
        this.justifiedAbsence = Math.round((this.props.justifiedAbsence/this.props.total)*20);
        this.unjustifiedAbsence = Math.round((this.props.unjustifiedAbsence/this.props.total)*20);

        this.legend = [
            {
                color: '#97C7F6',
                name: 'Total de sessões',
                value: this.props.total
            },
            {
                color: '#00B894',
                name: 'Presenças confirmadas',
                value: this.props.presence
            },
            {
                color: '#A07A00',
                name: 'Ausências justificadas',
                value: this.props.justifiedAbsence
            },
            {
                color: '#E17055',
                name: 'Ausências não justificadas',
                value: this.props.unjustifiedAbsence
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
                chair: greenChair,
                title: 'Ausência não justificada'
            }
        ];
    }


    render() {
        return(
            <ChairChartContainer>
                <ChartTitle>{this.props.title}</ChartTitle>
                <ChairWrapper>
                    {Array(this.presence).fill(0).map(() => (
                        <ChairIcon src={greenChair} />
                    ))}
                    {Array(this.justifiedAbsence).fill(0).map(() => (
                        <ChairIcon src={yellowChair} />
                    ))}
                    {Array(this.unjustifiedAbsence).fill(0).map(() => (
                        <ChairIcon src={redChair} />
                    ))}
                </ChairWrapper>
                <LegendContainer>
                    {
                        this.legend.map((element) => (
                            <LegendLine>
                                <Dot style={{ backgroundColor: element.color}} />
                                <LegendName>
                                    {element.name} <LegendValue>{element.value} sessões</LegendValue>
                                </LegendName>
                            </LegendLine>
                        ))
                    }
                </LegendContainer>
                <ChairLegendWrapper>
                    {
                        this.chairLegend.map((element) => (
                            <ChairLegendLine>
                                <ChairIco src={element.chair} />
                                <ChairLegendText>{element.title}</ChairLegendText>
                            </ChairLegendLine>
                        ))
                    }
                </ChairLegendWrapper>
            </ChairChartContainer>
        );
    }
}