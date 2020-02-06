import React, { useState, useEffect } from 'react';
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
import api from '../general/Api';

const ExpensesTable = ({ id, title }) => {
    const [expenses, setExpenses] = useState([]);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(1);
    const [loading, setLoading] = useState(true);
   
    const requestPage = async () => {
        setLoading(true);
        try{
            const res = await api.get('expenses', { params: {
                politicianId: id,
                perPage: 20,
                page,
            }});

            const { expenses = [], pages = 0 } = res.data;

            setExpenses(expenses);
            setPages(pages)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        requestPage();
    }, [page]);

    return(
        <Container>
            <ChartTitle>{title}</ChartTitle>
            <TableWrapper>
                <LoadingSpinner show={loading} backgroundColor='white' position='absolute'/>    
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
                        {expenses.map((el, id) => (
                            <TableLine key={id}>
                                <Provider>
                                    <Data style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                                        {el.provider.name}
                                    </Data>
                                </Provider>
                                <DateString>
                                    <Data>
                                        {formatDate(new Date(el.date))}
                                    </Data>
                                </DateString>
                                <Kind>
                                    <Data>
                                        {el.type}
                                    </Data>
                                </Kind>
                                <Value>
                                    <Data>
                                        {toMoney(parseFloat(el.value))}
                                    </Data>
                                </Value>
                            </TableLine>
                        ))}
                    </tbody>
                </Table>
                <ResponsiveTable>
                    {expenses.map((el, id) => (
                        <Datum key={id}>
                            <ResponsiveLine>
                                <ResponsiveHeader>Fonte</ResponsiveHeader>
                                <ResponsiveData style={{ justifyContent: 'flex-start', textAlign: 'left' }}>{el.provider.name}</ResponsiveData>
                            </ResponsiveLine>
                            <ResponsiveLine>
                                <ResponsiveHeader>Data</ResponsiveHeader>
                                <ResponsiveData>{formatDate(new Date(el.date))}</ResponsiveData>
                            </ResponsiveLine>
                            <ResponsiveLine>
                                <ResponsiveHeader>Tipo</ResponsiveHeader>
                                <ResponsiveData>{el.type}</ResponsiveData>
                            </ResponsiveLine>
                            <ResponsiveLine>
                                <ResponsiveHeader>Valor</ResponsiveHeader>
                                <ResponsiveData>{toMoney(parseFloat(el.value))}</ResponsiveData>
                            </ResponsiveLine>
                        </Datum>
                    ))}
                </ResponsiveTable>
                <Paginator
                onPageChange={({ selected }) => setPage(selected)} 
                pageCount={pages}
                />
            </TableWrapper>
        </Container>
    );
}

export default ExpensesTable;
