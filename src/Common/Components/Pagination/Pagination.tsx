import React, {FC, memo, useState} from 'react';
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
    const countPortion = Math.ceil(pagesOfgUsers/ pageSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)

    const leftPortionNumber = (portionNumber - 1) * pageSize + 1
    const rightPortionNumber = portionNumber * pageSize

    const setPortionStepMinusOne = () => {
        setPortionNumber(portionNumber - 1)
        onPageHandler(leftPortionNumber-pageSize)
    }
    const setPortionStepPlusOne = () => {
        setPortionNumber(portionNumber + 1)
        onPageHandler(leftPortionNumber+pageSize)
    }
    const setFirstPage = () => {
        setPortionNumber(portionNumber = 1)
        onPageHandler(1)
    }
    const setLastPage = () => {
        setPortionNumber(portionNumber = countPortion)
        onPageHandler(pagesOfgUsers)
    }


    return (
        <div className={c.pagesCount}>

            {portionNumber > 1 &&
                <button onClick={setFirstPage}>FIRST</button>
            }
            {portionNumber > 1 &&
                <button onClick={setPortionStepMinusOne}>PREV</button>
            }
            {pages.filter(f=> f>= leftPortionNumber && f<=rightPortionNumber).
            map(p => <span key={p}
                           className={currentPage === p ? c.selected : ''}
                           onClick={(e) => {
                               onPageHandler(p)
                           }}
            >{p}</span>)}
            {countPortion > portionNumber &&
                <button onClick={setPortionStepPlusOne}>NEXT</button>
            }
            {countPortion > portionNumber &&
                <button onClick={setLastPage}>LAST</button>
            }
        </div>
    );
});

export default Pagination;