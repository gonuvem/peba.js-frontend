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

        this.pageChange = this.pageChange.bind(this);
    }

    requestPage = async page => {
        console.log('PAge sent', page)
        try{
            const expenses = await API.get(`expenses?politicianId=${this.props.id}&year=2018&perPage=20&page=${page}`);
            await this.setState({ ...expenses.data });
    
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    async componentDidMount() {
        this.requestPage(this.state.currentPage);
    }

    pageChange = currentPage => {
        this.setState({ currentPage: currentPage.selected }, () =>{ this.requestPage(this.state.currentPage) })
    }

    render() {
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
                    onPageChange={this.pageChange} 
                    pageCount={this.state.pages}
                    />
                </TableWrapper>
            </Container>
        );
    }
}