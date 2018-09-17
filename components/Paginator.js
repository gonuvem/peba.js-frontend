import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import  {
    Container,
    ControllerIconContainer,
    Page,
    Selected,
    Unselected,
} from '../styles/PaginatorStyles';
import {
    nextIcon,
    previousIcon,
} from '../general/Constants';
import '../static/css/Paginator.css';

export default class Paginator extends Component {

    render() {
        return(
            <Container style={this.props.style}>
                <ControllerIconContainer onClick={() => this.props.currentPage !==0 ? this.props.onPreviousPress() : undefined}>
                    <ReactSVG src={previousIcon} svgClassName={'disabledController'} />
                </ControllerIconContainer>
                    {
                        Array(this.props.numberOfPages).fill(0).map((element, index) => (
                            <Page 
                            key={index}
                            onClick={() => this.props.onPagePress(index)} 
                            style={index === this.props.currentPage ? Selected : Unselected}
                            >
                                {index + 1}
                            </Page>
                        ))
                    }                    
                <ControllerIconContainer onClick={() => this.props.currentPage !== this.props.numberOfPages - 1 ? this.props.onNextPress() : undefined}>
                    <ReactSVG src={nextIcon} svgClassName='enabledController' />
                </ControllerIconContainer>
                
            </Container>
        );
    }
}