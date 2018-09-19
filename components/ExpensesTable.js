import React, { PureComponent } from 'react';
import {
    Paginator
} from '../components';
import {
    Container,
    Table,
    TableLine,
    TableHeader,
    Data,
    Provider,
    DateString,
    Kind,
    Value,
    TableWrapper
} from '../styles/ExpensesTableStyles';
import { formatDate, toMoney } from '../general/Constants';
import { ChartTitle } from '../styles/ChartStyles';
import API from '../general/Api';

export default class ExpensesTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            total: 0,
            pages: 1,
            currentPage: 0
        }
    }

    async componentDidMount() {
        try{
            const expenses = await API.get(`expenses?politicianId=${this.props.id}&year=2018&perPage=20&page=0`);
            await this.setState({ ...expenses.data });
    
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    render() {
        //console.log('table', this.props)
        return(
            <Container>
                <ChartTitle>{this.props.title}</ChartTitle>
                <TableWrapper>
                    <Table>
                        <thead>
                            <TableLine>
                                <TableHeader>Fonte</TableHeader>
                                <TableHeader>Data</TableHeader>
                                <TableHeader>Tipo</TableHeader>
                                <TableHeader style={{paddingRight: 30}}>Valor</TableHeader>
                            </TableLine>
                        </thead>
                        <tbody>
                            {
                                this.state.expenses.map((element, id) => (
                                    <TableLine key={id}>
                                        <Provider><Data style={{ justifyContent: 'flex-start', textAlign: 'left' }}>{element.provider.name}</Data></Provider>
                                        <DateString><Data>{formatDate(new Date(element.date))}</Data></DateString>
                                        <Kind><Data>{element.type}</Data></Kind>
                                        <Value><Data>{toMoney(parseFloat(element.value))}</Data></Value>
                                    </TableLine>
                                ))
                            }
                        </tbody>
                    </Table>
                    <Paginator 
                    style={{marginTop: 20, marginBottom: 20, /*width: 280*/}}
                    numberOfPages={this.state.pages} 
                    currentPage={this.state.currentPage} 
                    onPagePress={() => {}}
                    onNextPress={() => {}}
                    onPreviousPress={() => {}}
                    />
                </TableWrapper>
            </Container>
        );
    }
}