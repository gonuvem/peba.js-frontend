import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    VerticalBarChartContainer,
    ChartTitle
} from '../styles/ChartStyles';
import { toMoney } from '../general/Constants';

const VerticalBarChart = ({ data, title }) => {
    return (
        <VerticalBarChartContainer>
            <ChartTitle>{title}</ChartTitle>
            <Bar
            data={data}
            legend={{
                position: 'top',
                fullWidth: true,
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

                            callback: (item) => `${toMoney(item)},00`
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label: (item) => (toMoney(item.yLabel))
                    }
                }
            }}
            />
        </VerticalBarChartContainer>
    );
}

export default VerticalBarChart;
