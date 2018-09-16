import React, { Component } from 'react';
import  {
    Container,
    ControllerIcon,
    ControllerIconContainer,
    Page,
    Selected,
    Unselected
} from '../styles/PaginatorStyles';
import {
    nextIcon,
    previousIcon,
} from '../general/Constants';


export default class Paginator extends Component {

    render() {
        return(
            <Container style={this.props.style}>
                <ControllerIconContainer onClick={() => this.props.onPreviousPress()}>
                    <ControllerIcon src={previousIcon} />
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
                <ControllerIconContainer onClick={() => this.props.onNextPress()}>
                    <ControllerIcon src={nextIcon} />
                </ControllerIconContainer>
                
            </Container>
        );
    }
}