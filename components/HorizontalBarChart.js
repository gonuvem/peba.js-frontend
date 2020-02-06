import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import {
    HorizontalBarChartContainer,
    ChartTitle
} from '../styles/ChartStyles';
import { toMoney, truncate } from '../general/Constants';

const HorizontalBarChart = ({ data, title }) => {
    return (
        <HorizontalBarChartContainer>
            <ChartTitle>{title}</ChartTitle>
            <HorizontalBar
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
            options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            callback: (item) => `${toMoney(item)},00`
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            callback: (item) => truncate(item)
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label: (item) => (toMoney(item.xLabel))
                    }
                },
            }}
            />
        </HorizontalBarChartContainer>
    );
}

export default HorizontalBarChart;
