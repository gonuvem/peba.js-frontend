import React, { PureComponent } from 'react';
import { Header, Footer } from './index';
import { Container } from '../styles/LayoutStyles';

export default class Initial extends PureComponent {

    render() {
        return (
            <Container>
                <Header>
                    {this.props.headerContent}
                </Header>
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}