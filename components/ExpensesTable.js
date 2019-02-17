import React, { PureComponent } from 'react';
import {
    Paginator,
    LoadingSpinner
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
    TableWrapper,
    ResponsiveTable,
    Datum,
    ResponsiveLine,
    ResponsiveData,
    ResponsiveHeader
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
            loading: true
        }

    }

    requestPage = async page => {
        this.setState({ loading: true });
        try{
            const expenses = await API.get(`expenses?politicianId=${this.props.id}&perPage=20&page=${page.selected}`);
            await this.setState({ ...expenses.data, loading: false });
    
        } catch (error) {
            this.setState({ loading: false });
            console.log(error.response.data.message)
        }
    }

    async componentDidMount() {
        this.requestPage({ selected: 0 });
    }

    render() {
        return(
            <Container>
                <ChartTitle>{this.props.title}</ChartTitle>
                <TableWrapper>
                    <LoadingSpinner show={this.state.loading} backgroundColor='white' position='absolute'/>    
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
                    <ResponsiveTable>
                        {
                            this.state.expenses.map((element, id) => (
                                <Datum key={id}>
                                    <ResponsiveLine>
                                        <ResponsiveHeader>Fonte</ResponsiveHeader>
                                        <ResponsiveData style={{ justifyContent: 'flex-start', textAlign: 'left' }}>{element.provider.name}</ResponsiveData>
                                    </ResponsiveLine>
                                    <ResponsiveLine>
                                        <ResponsiveHeader>Data</ResponsiveHeader>
                                        <ResponsiveData>{formatDate(new Date(element.date))}</ResponsiveData>
                                    </ResponsiveLine>
                                    <ResponsiveLine>
                                        <ResponsiveHeader>Tipo</ResponsiveHeader>
                                        <ResponsiveData>{element.type}</ResponsiveData>
                                    </ResponsiveLine>
                                    <ResponsiveLine>
                                        <ResponsiveHeader>Valor</ResponsiveHeader>
                                        <ResponsiveData>{toMoney(parseFloat(element.value))}</ResponsiveData>
                                    </ResponsiveLine>
                                </Datum>
                            ))
                        }
                    </ResponsiveTable>
                    <Paginator
                    onPageChange={this.requestPage} 
                    pageCount={this.state.pages}
                    />
                </TableWrapper>
            </Container>
        );
    }
}