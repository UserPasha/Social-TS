import React, {useState, DragEvent} from 'react';
import { v1 } from 'uuid';
import s from "./Settings.module.css"

type cardsType = {
    id: string
    order: number
    title: string
}
const Settings = () => {
    //ONE BOARD
    const [cards, setCards] = useState<Array<cardsType>>([
        {id: v1(), order: 1, title: "Card 1"},
        {id: v1(), order: 2, title: "Card 2"},
        {id: v1(), order: 3, title: "Card 3"},
        {id: v1(), order: 4, title: "Card 4"},
    ])
    const [currentCard, setCurrentCart] = useState<cardsType | null>(null)
    const dragStartHandler = (e: DragEvent<HTMLDivElement>, card: cardsType) => {
        setCurrentCart(card)
    }
    const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {

    }
    const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
        let element = e.target as HTMLDivElement
        element.style.background = "white"
    }
    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        let element = e.target as HTMLDivElement
        element.style.background = "lightBlue"
    }
    const dropHandler = (e: DragEvent<HTMLDivElement>, card: cardsType) => {
        e.preventDefault()
        setCards(cards.map(c => {
            if (c.id === card.id) {
                return {...c, order: currentCard?.order!}
            }
            if (c.id === currentCard?.id) {
                return {...c, order: card.order}
            }
            return c
        }))
        let element = e.target as HTMLDivElement
        element.style.background = "white"
    }
    const sortCards = (a: cardsType, b: cardsType) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }
    //THREE BOARDS
    type itemsType = {
        id:string,
        title: string
    }
    type boardType = {
        id: string,
        title: string,
        items: itemsType[]
    }
    const [board, setBoard] = useState<boardType[]>([
        {id: v1(), title: "what", items:[{id:v1(), title: "Spain"},{id:v1(), title: "Turkey"},{id:v1(), title: "Bulgaria"}]},
        {id: v1(), title: "who", items:[{id:v1(), title: "Poland"},{id:v1(), title: "Chech"},{id:v1(), title: "Hungary"}]},
        {id: v1(), title: "which", items:[{id:v1(), title: "Canada"},{id:v1(), title: "Norway"},{id:v1(), title: "Romain"}]},
    ])
    const [currentBoard, setCurrentBoard] = useState<boardType|null>(null)
    const [currentItem, setCurrentItem] = useState<itemsType| null>(null)
    function onDragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        let element = e.target as HTMLDivElement
        if(element.className === `${s.item}`){
            element.style.boxShadow = "0 4px 3px gray"
        }
    }
    console.log("board", board)
    console.log("currentBoard", currentBoard)

    function onDragStartHandler(e: React.DragEvent<HTMLDivElement>, b: boardType, i: itemsType) {
        setCurrentBoard(b)
        setCurrentItem(i)
    }

    function onDragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        let element = e.target as HTMLDivElement
        element.style.boxShadow = "none"
    }


    function onDragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        let element = e.target as HTMLDivElement
        element.style.boxShadow = "none"
    }

    function onDropHandler(e: React.DragEvent<HTMLDivElement>, b: boardType, i: itemsType) {
        e.preventDefault()
        const currentIndex = currentBoard?.items.indexOf(currentItem!)
        currentBoard?.items.splice(currentIndex!, 1)
        const dropIndex = b.items.indexOf(i)
        b.items.splice(dropIndex+1, 0, currentItem!)
        // @ts-ignore
        setBoard(board.map(m=>{
            if(m.id === b.id){
                return b
            }
            if(m.id === currentBoard?.id){
                return currentBoard
            }
            return m
        }))
    }

    function onBoardDrop(e: React.DragEvent<HTMLDivElement>, b: boardType) {
        b.items.push(currentItem!)
        const currentIndex = currentBoard?.items.indexOf(currentItem!)
        currentBoard?.items.splice(currentIndex!, 1)
        // @ts-ignore
        setBoard(board.map(m=>{
            if(m.id === b.id){
                return b
            }
            if(m.id === currentBoard?.id){
                return currentBoard
            }
            return m
        }))
    }

    return (
        <>
            <div className={s.wrapper}>
                {cards.sort(sortCards).map(c =>
                    <div key={c.id}
                         className={s.cards}
                         draggable={true}
                         onDragStart={(e) => dragStartHandler(e, c)}
                         onDragLeave={(e) => dragLeaveHandler(e)}
                         onDragEnd={(e) => dragEndHandler(e)}
                         onDragOver={(e) => dragOverHandler(e)}
                         onDrop={(e) => dropHandler(e, c)}>{c.title}</div>
                )}
            </div>
            <div className={s.under}>
                {board.map(b=>
                    <div key={b.id}
                         className={s.cards}
                         onDragOver={(e)=>onDragOverHandler(e)}
                         onDrop={(e)=>onBoardDrop(e, b)}
                    >
                        <div className={s.cardsTitle}>{b.title}</div>
                        {b.items.map(i=>
                        <div key={i.id} 
                             className={s.item} 
                             draggable={true}
                             onDragOver={(e)=>onDragOverHandler(e)}
                             onDragStart={(e)=>onDragStartHandler(e, b, i)}
                             onDragLeave={(e)=>onDragLeaveHandler(e)}
                             onDragEnd={(e)=>onDragEndHandler(e)}
                             onDrop={(e)=>onDropHandler(e,b,i)}
                        >{i.title}</div>)}
                    </div>)}
            </div>
        </>
    );
};

export default Settings;