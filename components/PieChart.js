import React, { PureComponent } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    PieChartContainer,
    ChartTitle,
    PieContainer,
    PieLegendContainer,
    LegendBox,
    PieLegendText,
    PieLegendLine,
    PieContent,
    PieChartWrapper
} from '../styles/ChartStyles';
import { toMoney } from '../general/Constants';

export default class PieChart extends PureComponent {
    render() {
        return (
            <PieChartContainer>
                <ChartTitle>{this.props.title}</ChartTitle>
              <PieContent>
                <PieLegendContainer>
                        {
                            this.props.data.labels.map((element, index) => (
                                <PieLegendLine key={index}>
                                    <LegendBox color={this.props.data.datasets[0].backgroundColor[index]} />
                                    <PieLegendText>{element}</PieLegendText>
                                </PieLegendLine>
                            ))
                        }
                    </PieLegendContainer>
                <PieContainer>
                    <PieChartWrapper>
                        <Pie
                        data={this.props.data}
                        legend={{
                            display: false,
                        }}
                        width={300}
                        height={300}
                        options={{
                            responsiveAnimationDuration: 1500,
                            maintainAspectRatio: true,
                            tooltips: {
                                callbacks: {
                                    label: (item, value) => toMoney(value.datasets[0].data[item.index])
                                }
                            },
                            onResize: () => console.log('Resizing')
                        }}
                        />
                    </PieChartWrapper>
                </PieContainer>
                </PieContent>
            </PieChartContainer>
        );
    }
}