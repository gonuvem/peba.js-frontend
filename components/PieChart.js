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
    PieContent
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
                    <Pie
                    data={this.props.data}
                    legend={{
                        display: false,
                    }}
                    width={200}
                    height={400}
                    options={{
                        responsiveAnimationDuration: 1500,
                        maintainAspectRatio: false,
                        tooltips: {
                            callbacks: {
                                label: (item, value) => toMoney(value.datasets[0].data[item.index])
                            }
                        }
                    }}
                    />
                </PieContainer>
                </PieContent>
            </PieChartContainer>
        );
    }
}