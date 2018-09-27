import React, { PureComponent } from 'react';
import { Header, Footer } from './index';
import { Container } from '../styles/LayoutStyles';
import { LoadingSpinner } from '../components';
import Router from 'next/router';


export default class Initial extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        Router.onRouteChangeStart = (url) => {
            console.log(`Loading: ${url}`);
            this.setState({ loading: true });
        };
        Router.onRouteChangeComplete = () => {
            this.setState({ loading: false });
        }
        Router.onRouteChangeError = () => {
            this.setState({ loading: false });

        }
    }

    render() {
        return (
            <Container>
                <LoadingSpinner show={this.state.loading}/>
                <Header>
                    {this.props.headerContent}
                </Header>
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}