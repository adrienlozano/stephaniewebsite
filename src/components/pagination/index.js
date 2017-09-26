import React from 'react';
import styled from 'styled-components';
import Link from '~/components/link';

const Nav = styled.nav`
    text-align:center;
    margin-top:2em;
`

const Pagination = ({className, children, renderPrevious, renderNext, renderPage, current = 1, total = 1}) => {
    let pages = [];
    let prev = renderPrevious(current - 1, current > 1);
    let next = renderNext(current + 1, current < total);

    for(var i=1; i <= total; i++){
        pages.push(renderPage(i, current, total));
    }

    return (<Nav className={className}>
        {prev}
        {pages}
        {next}
    </Nav>)
}

export default Pagination;
