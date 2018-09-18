import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    VerticalBarChartContainer,
    ChartTitle
} from '../styles/ChartStyles';
import { convertMoney } from '../general/Constants';

export default class PieChart extends PureComponent {

    constructor(props) {
        super(props);
        this.toMoney = this.toMoney.bind(this);
    }

    toMoney = value => (
        `R$ ${convertMoney(value)},00`
    )

    render() {
        return (
            <VerticalBarChartContainer>
                <ChartTitle>Gastos por mês no ano de 2018</ChartTitle>
                <Bar
                data={this.props.data}
                legend={{
                    position: 'right',
                    fullWidth: false,
                    labels: {
                        fontSize: 17,
                        fontColor: '#747474',
                        fontFamily: 'Roboto',
                        padding: 21,
                    }
                }}
                width={1431}
                height={676}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {

                                callback: this.toMoney
                            }
                        }]
                    },
                    tooltips: {
                        
                    }
                }}
                />
            </VerticalBarChartContainer>
        );
    }
}