import React, {useState, ChangeEvent} from 'react';
import c from "./Settings.module.css"

const Settings = () => {
    type AnswersType = {
        title: string,
        answerOne: string,
        answerTwo: string,
        answerThree: string,
        answerFour: string,
        answerFive: string,
    }
    const AnswersArray: AnswersType[] = [
        {
            title: 'Назовите самый крупный город',
            answerOne: 'Пекин',
            answerTwo: 'Нью-Йорк',
            answerThree: 'Москва',
            answerFour: 'Минск',
            answerFive: 'Смолевичи',
        },
        {
            title: 'Назовите то, что люди носят, но скорее всего это подделка?',
            answerOne: 'Брендовая одежда',
            answerTwo: 'Волосы (парик)',
            answerThree: 'Часы',
            answerFour: 'Ресницы',
            answerFive: 'Украшения',
        },
        {
            title: 'Что вы сделаете первым делом, когда заселитесь в номер отеля?',
            answerOne: 'Прыгну на кровать',
            answerTwo: 'Осмотр комнаты',
            answerThree: 'Включу телевизор',
            answerFour: 'Посморю вид',
            answerFive: 'Распакую багаж',
        },
        {
            title: 'Когда актёр выигрывает престижную награду, кого он поблагодарит в своей речи?',
            answerOne: 'Родетелей',
            answerTwo: 'Бога',
            answerThree: 'Фанатов',
            answerFour: 'Партнеров по фильму',
            answerFive: 'Режиссера',
        },
        {
            title: 'Где был ваш первый поцелуй',
            answerOne: 'В машине',
            answerTwo: 'В кино',
            answerThree: 'В школе',
            answerFour: 'В парке',
            answerFive: 'На вечеринке',
        },
        {
            title: 'Назовите причину по которой вам нужно срочно снять штаны',
            answerOne: 'Понос',
            answerTwo: 'Они загорелись',
            answerThree: 'Насекомые',
            answerFour: 'Шпили-вили)',
            answerFive: 'Испачкались/промокли',
        },
        {
            title: 'Мы опросили 100 разведеных мужчин и женщин.' +
                'закончите фразу: ' +
                'У вас был развод без проблем, но вы не хотели бы видеть его(ее) ...',
            answerOne: 'Родственников',
            answerTwo: 'Пасию',
            answerThree: 'Лицо',
            answerFour: 'Друзей',
            answerFive: 'Любимые передачи/привычки',
        },
        {
            title: 'Что фокусник достал из шляпы?',
            answerOne: 'Кролик',
            answerTwo: 'Голубь',
            answerThree: 'Цветок',
            answerFour: 'Платки',
            answerFive: 'Колоду карт',
        },
        {
            title: 'Назовите фрукт, на которм подросток тренируется целоваться',
            answerOne: 'Яблоко',
            answerTwo: 'Персик',
            answerThree: 'Апельсин',
            answerFour: 'Арбуз',
            answerFive: 'Слива',
        },
        {
            title: 'Что может приземлиться на голову лысого человека и сразу соскользнуть?',
            answerOne: 'Птичий помёт',
            answerTwo: 'Капли воды/лёд',
            answerThree: 'Птица',
            answerFour: 'Парик',
            answerFive: 'Лист(с дерева)',
        },
        {
            title: 'Назовите место, где вы очень сильно ругаетесь матом',
            answerOne: 'Дом',
            answerTwo: 'Работа',
            answerThree: 'Машина (в пробке)',
            answerFour: 'Бар',
            answerFive: 'Спортивная арена',
        },
        {
            title: 'Назовите способ, которым девушка может флиртовать с мужчиной, ' +
                'не вступая в физический контакт',
            answerOne: 'Подмигнуть',
            answerTwo: 'Улыбнуться',
            answerThree: 'Облизнуть губы',
            answerFour: 'Разговор/комплимент',
            answerFive: 'Написать сообщение',
        },
        {
            title: 'Мы опросили 100 женатых мужчин. Назовите ' +
                'то, что делают девушку незабываемой',
            answerOne: 'Лицо',
            answerTwo: 'Характер',
            answerThree: 'Тело',
            answerFour: 'Голос',
            answerFive: 'Запах',
        },
        {
            title: 'Что может сказать девушка не превом свидании, ' +
                'что может напугать мужчину',
            answerOne: 'Я беременна/У меня есть дети',
            answerTwo: 'Давай поженимся',
            answerThree: 'Я тебя люблю',
            answerFour: 'Я больна',
            answerFive: 'Я замужем за бандитом',
        },
        {
            title: 'Что может бросить учитель в разгеневаного ученика?',
            answerOne: 'Ластик/Стирка',
            answerTwo: 'Карандаш/Руска',
            answerThree: 'Линейка',
            answerFour: 'Книга',
            answerFive: 'Мел',
        }
    ]
    const [answers, setAnswers] = useState<AnswersType>(AnswersArray[0])
    const GetNextQuestion = () => {
        setAnswers(AnswersArray[Math.floor(Math.random() * AnswersArray.length)])
    }
    const [firstPlayerName, setFirstPlayerName] = useState<string>('ol')
    const setFirstPlayerNameIn = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstPlayerName(e.target.value)
    }
    const [secondPlayerName, setSecondPlayerName] = useState<string>('lk')
    const setSecondPlayerNameIn = (e: ChangeEvent<HTMLInputElement>) => {
        setSecondPlayerName(e.target.value)
    }
    const [mode, setMode] = useState<boolean>(false)
    const [modeTwo, setModeTwo] = useState<boolean>(false)
    const [firstPlayerScore, setFirstPlayerScore] = useState<number>(0)
    const [secondPlayerScore, setSecondPlayerScore] = useState<number>(0)
    const AddFirstPlayerScore = (amount: number) => {
        setFirstPlayerScore(firstPlayerScore + amount)
    }
    const AddSecondPlayerScore = (amount: number) => {
        setSecondPlayerScore(secondPlayerScore + amount)
    }


    return (

        <div className={c.wrapper}>
            <div className={c.game}>
                <div className={c.score}>

                    <button onClick={() => {
                        setMode(true)
                    }}>FirstName
                    </button>
                    <button onClick={() => {
                        setMode(false)
                    }}>Save
                    </button>
                    {mode ? <input value={firstPlayerName} onChange={setFirstPlayerNameIn}/> :
                        <span className={c.name}>{firstPlayerName}</span>}
                    <span className={c.vs}>VS</span>
                    {modeTwo ? <input value={secondPlayerName} onChange={setSecondPlayerNameIn}/> :
                        <span className={c.name}>{secondPlayerName}</span>}
                    <button onClick={() => {
                        setModeTwo(true)
                    }}>SecondName
                    </button>
                    <button onClick={() => {
                        setModeTwo(false)
                    }}>Save
                    </button>


                </div>
                <div className={c.scoreNumbers}>
                    {firstPlayerScore} : {secondPlayerScore}
                </div>
                <div className={c.attemptsWrapper}>
                    <div className={c.attempts}>
                        <div className={c.attemptItem}></div>
                        <div className={c.attemptItem}></div>
                        <div className={c.attemptItem}></div>
                    </div>

                    <div className={c.title}><p>{answers.title}</p></div>
                    <div className={c.attempts}>
                        <div className={c.attemptItem}></div>
                        <div className={c.attemptItem}></div>
                        <div className={c.attemptItem}></div>
                    </div>

                </div>

                <div className={c.answer}>
                    <div className={c.amount} onClick={() => {
                        AddFirstPlayerScore(5)
                    }}>5
                    </div>
                    <div className={c.answerTitle}>{answers.answerOne}</div>
                    <div className={c.amount} onClick={() => {
                        AddSecondPlayerScore(5)
                    }}>5
                    </div>
                </div>
                <div className={c.answer}>
                    <div className={c.amount} onClick={() => {
                        AddFirstPlayerScore(4)
                    }}>4
                    </div>
                    <div className={c.answerTitle}>{answers.answerTwo}</div>
                    <div className={c.amount} onClick={() => {
                        AddSecondPlayerScore(4)
                    }}>4
                    </div>
                </div>
                <div className={c.answer}>
                    <div className={c.amount} onClick={() => {
                        AddFirstPlayerScore(3)
                    }}>3
                    </div>
                    <div className={c.answerTitle}>{answers.answerThree}</div>
                    <div className={c.amount} onClick={() => {
                        AddSecondPlayerScore(3)
                    }}>3
                    </div>
                </div>
                <div className={c.answer}>
                    <div className={c.amount} onClick={() => {
                        AddFirstPlayerScore(2)
                    }}>2
                    </div>
                    <div className={c.answerTitle}>{answers.answerFour}</div>
                    <div className={c.amount} onClick={() => {
                        AddSecondPlayerScore(2)
                    }}>2
                    </div>
                </div>
                <div className={c.answer}>
                    <div className={c.amount} onClick={() => {
                        AddFirstPlayerScore(1)
                    }}>1
                    </div>
                    <div className={c.answerTitle}>{answers.answerFive}</div>
                    <div className={c.amount} onClick={() => {
                        AddSecondPlayerScore(1)
                    }}>1
                    </div>
                </div>
            </div>

            <button onClick={GetNextQuestion} className={c.nextButton}>NEXT</button>

        </div>
    );
};

export default Settings;