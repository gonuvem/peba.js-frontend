import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import {
    nextIcon,
    previousIcon,
} from '../general/Constants';
import '../static/css/Paginator.css';
import ReactPaginate from 'react-paginate';

export default class Paginator extends Component {

    render() {
        return(
           <ReactPaginate
           pageCount={this.props.pageCount}
           pageRangeDisplayed={5}
           marginPagesDisplayed={2}
           previousLabel={<ReactSVG src={previousIcon} svgClassName='enabledController' />}
           nextLabel={<ReactSVG src={nextIcon} svgClassName='enabledController' />}
           containerClassName='paginator-container'
           pageClassName='paginator-page'
           activeClassName='paginator-active-page'
           pageLinkClassName='paginator-link'
           breakClassName='paginator-ellipsis'
           onPageChange={this.props.onPageChange}
           forcePage={this.props.forcePage}
           />
        );
    }
}
