import React, { useState, useEffect } from 'react';
import { Header, Footer } from './index';
import { Container } from '../styles/LayoutStyles';
import { LoadingSpinner } from '../components';
import Router from 'next/router';

const Initial = ({ children, headerContent }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.onRouteChangeStart = (url) => {
            setLoading(true);
        };
        Router.onRouteChangeComplete = () => {
            setLoading(false);
        }
        Router.onRouteChangeError = () => {
            setLoading(false);
        }
    }, []);

    return (
        <Container>
            <LoadingSpinner show={loading} position='fixed'/>
            <Header>
                {headerContent}
            </Header>
            {children}
            <Footer />
        </Container>
    );
}

export default Initial;
