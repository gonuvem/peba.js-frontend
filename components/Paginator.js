import React from 'react';
import { ReactSVG } from 'react-svg'
import {
    nextIcon,
    previousIcon,
} from '../general/Constants';
import '../static/css/Paginator.css';
import ReactPaginate from 'react-paginate';

const Paginator = props => {
    const {
        pageCount,
        onPageChange,
        forcePage
    } = props;

    return(
        <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel={<ReactSVG src={previousIcon} svgClassName='enabledController' />}
        nextLabel={<ReactSVG src={nextIcon} svgClassName='enabledController' />}
        containerClassName='paginator-container'
        pageClassName='paginator-page'
        activeClassName='paginator-active-page'
        pageLinkClassName='paginator-link'
        breakClassName='paginator-ellipsis'
        onPageChange={onPageChange}
        forcePage={forcePage}
        />
    );
}

export default Paginator;

