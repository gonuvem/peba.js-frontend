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
    Date,
    Kind,
    Value,
    TableWrapper
} from '../styles/ExpensesTableStyles';
import { ChartTitle } from '../styles/ChartStyles'

export default class ExpensesTable extends PureComponent {

    render() {
        return(
            <Container>
                <ChartTitle>{this.props.title}</ChartTitle>
                <TableWrapper>
                    <Table>
                        <TableLine>
                            <TableHeader>Fonte</TableHeader>
                            <TableHeader>Data</TableHeader>
                            <TableHeader>Tipo</TableHeader>
                            <TableHeader style={{paddingRight: 30}}>Valor</TableHeader>
                        </TableLine>
                        <TableLine>
                            <Provider><Data style={{ justifyContent: 'flex-start' }}>POSTO IPIRANGA</Data></Provider>
                            <Date><Data>12/09/2018</Data></Date>
                            <Kind><Data>12/09/2018</Data></Kind>
                            <Value><Data>12/09/2018</Data></Value>
                        </TableLine>
                        <TableLine>
                            <Provider><Data style={{ justifyContent: 'flex-start' }}>POSTO IPIRANGA</Data></Provider>
                            <Date><Data>12/09/2018</Data></Date>
                            <Kind><Data>12/09/2018</Data></Kind>
                            <Value><Data>12/09/2018</Data></Value>
                        </TableLine>
                    </Table>
                    <Paginator 
                    style={{marginTop: 20, marginBottom: 20, width: 280}}
                    numberOfPages={5} 
                    currentPage={0} 
                    onPagePress={() => {}}
                    onNextPress={() => {}}
                    onPreviousPress={() => {}}
                    />
                </TableWrapper>
            </Container>
        );
    }
}