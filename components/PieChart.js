import React, { PureComponent } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    PieChartContainer,
    ChartTitle
} from '../styles/ChartStyles';

export default class PieChart extends PureComponent {
    render() {
        return (
            <PieChartContainer>
                <ChartTitle>{this.props.title}</ChartTitle>
                <Pie
                data={this.props.data}
                legend={{
                    fullWidth: false,
                    labels: {
                        fontSize: 17,
                        fontColor: '#747474',
                        fontFamily: 'Roboto',
                        padding: 21,
                    }
                }}
                width={200}
                height={400}
                options={{
                    responsiveAnimationDuration: 1500,
                    maintainAspectRatio: false,
                }}
                />
            </PieChartContainer>
        );
    }
}