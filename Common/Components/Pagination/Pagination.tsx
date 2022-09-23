import React, {FC, memo} from 'react';
import c from './Pagination.module.css'


type PaginationType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageHandler: (p: number)=> void
}

const Pagination:FC<PaginationType> = memo(({totalUsers, pageSize, currentPage, onPageHandler}) => {
    let pagesOfgUsers = Math.ceil(totalUsers / pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }
    return (
        <div className={c.pagesCount}>
            {pages.map((p, index) => <span key={index}
                                           className={currentPage === p ? c.selected : ''}
                                           onClick={(e) => {
                                               onPageHandler(p)
                                           }}
            >{p}</span>)}
        </div>
    );
});

export default Pagination;