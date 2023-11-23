import s from '@/styles/Home.module.scss'
import {FC, useState} from 'react'
import classnames from 'classnames'

const Event: FC<PropsType> = ({
    event,
    eventNumber,
    hoveredEventId,
    setHoveredEventId,
    segmentNumber,
    }) => {
    // todo: remove after id
    const eventId = event.id + segmentNumber

    const [eventPosition, setEventPosition] = useState('')

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
                                <img src="/key-figure-icon.png" alt="icon"/>
                                <img src="/quiz-icon.png" alt="icon"/>
                            </div>
                        )}
                        <p className={s.body__date}>{event?.date}</p>
                        <p className={s.body__title}>{event?.title}</p>
                        {+event.id % 2 === 1 && <p className={s.body__desc}>{event?.desc}</p>}
                        <button className={s.body__btn}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event

type PropsType = {
    eventNumber: number
    event: Event
    segmentNumber: number
    hoveredEventId: string
    setHoveredEventId: (value: string) => void
}

export type Event = {
    id: string
    date: string
    title: string
    desc?: string
}