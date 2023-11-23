import s from '@/styles/Home.module.scss'
import {FC, useEffect, useState} from 'react'
import classnames from 'classnames'
import Link from "next/link";
import {svgIcons} from "@/lib/svgIcons";

const Event: FC<PropsType> = ({
    event,
    eventNumber,
    hoveredEventId,
    setHoveredEventId,
    segmentNumber,
    openCard,
    }) => {
    // todo: remove after id
    const eventId = event.id + segmentNumber

    const [eventPosition, setEventPosition] = useState('')

    const [showQuizMenu, setShowQuizMenu] = useState(false)

    useEffect(() => {
        setShowQuizMenu(false)
    }, [hoveredEventId])

    return (
        <div
            className={
                classnames(
                    s.events__dot,
                    eventId == hoveredEventId && s.events__dot_hover
                )}
            style={{width: '10px', minWidth: '10px', height: '10px'}}
            onMouseEnter={(e) => {
                const marginTop = window.getComputedStyle(e.currentTarget).marginTop as string
                const marginTopNumber = marginTop.split('px')[0]

                setEventPosition(+marginTopNumber !== 0 ? 'top' : 'bottom')
                setHoveredEventId(eventId)
            }}
        >
            <div className={
                classnames(
                    +event.id % 2 === 1 ? s.events__item_large : s.events__item_small,
                    eventPosition === 'top' && s.events__item_up,
                    eventPosition === 'bottom' && s.events__item_down,
                    segmentNumber === 1 && eventNumber < 7 && s.first,
                    s.events__item,
                )
            }>
                <div className={s.arrow} />
                <div className={s.body}>
                    <div className={s.wrap}>
                        {+event.id % 2 === 1 && (
                            <div className={s.body__actions}>
                                <Link href="/keyfigure/id">
                                    <img src="/key-figure-icon.png" alt="icon"/>
                                </Link>
                                <img
                                    src="/quiz-icon.png"
                                    alt="icon"
                                    onClick={() => setShowQuizMenu(true)}
                                />
                            </div>
                        )}

                        <div className={classnames(s.quiz, showQuizMenu && s.active)}>
                            <div className={s.quiz__wrap}>
                                <div
                                    className={s.quiz__close}
                                    onClick={() => setShowQuizMenu(false)}
                                >
                                    {svgIcons.modal.close}
                                </div>
                                <p className={s.quiz__title}>{'Quiz: Bitcoin\'s Historical Milestones'}</p>
                                <Link href="/quiz" className={s.quiz__link}>Play quiz</Link>
                            </div>
                        </div>

                        <p className={s.body__date}>{event?.date}</p>
                        <p className={s.body__title}>{event?.title}</p>
                        {+event.id % 2 === 1 && <p className={s.body__desc}>{event?.desc}</p>}
                        <button className={s.body__btn} onClick={openCard}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event

type PropsType = {
    eventNumber: number
    event: EventType
    segmentNumber: number
    hoveredEventId: string
    setHoveredEventId: (value: string) => void
    openCard: () => void
}

export type EventType = {
    id: string
    date: string
    title: string
    desc?: string
}