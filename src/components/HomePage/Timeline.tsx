import s from '@/styles/Home.module.scss'
import React, {FC, useState} from 'react'
import Filter from '@/components/HomePage/Filter'
import MainLink from '@/components/MainLink'
import classnames from 'classnames'
import Event from '@/components/HomePage/Event'
import { EventType } from '@/components/HomePage/Event'

const events: EventType[] = [
    {
        id: '1',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '2',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '3',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '4',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '5',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '6',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '7',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '8',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '9',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '10',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '11',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '12',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '13',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '14',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '15',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '16',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '17',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '18',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '19',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
    {
        id: '20',
        date: 'Dec. 17, 2017',
        title: 'Bitcoin\'s Monumental Surge: Touching $20,000',
        desc: 'Bitcoin\'s meteoric rise culminated in reaching the $20,000 mark, a growth of 1,950% within the year, fueled by Wall Street\'s interest and technological advancements.'
    },
]

const Timeline: FC<PropsType> = ({ isScrolled, setIsScrolled }) => {
    const [selectedFields, setSelectedFields] = useState<string[]>([])
    const [selectedPartners, setSelectedPartners] = useState<SelectedPartner[]>([])

    const [hoveredEventId, setHoveredEventId] = useState('')

    const allYears = []
    const startYear = 2009
    const endYear = 2024

    for (let i = startYear; i <= endYear; i++) {
        allYears.push(i)
    }

    const maxViewYears = []
    const yearStep = allYears.length % 2 === 1 ? 2 : 3

    for (let i = 0; i < allYears.length; i = i + yearStep) {
        maxViewYears.push(allYears[i])
    }

    const widthSegment = 100 / (maxViewYears.length - 1)

    return (
        <div className={classnames(s.animation, s.wrapper, isScrolled && s.show)}>
            <Filter
                selectedFields={selectedFields}
                setSelectedFields={setSelectedFields}
                selectedPartners={selectedPartners}
                setSelectedPartners={setSelectedPartners}
                isScrolled={isScrolled}
            />
            <div className={s.timeline}>
                <div className={s.mainline}>
                    <div className={s.item}>
                        <div className={s.date}>
                            {allYears[0]}
                            <div />
                        </div>
                    </div>
                    {maxViewYears?.map((y, segmentNumber) => (
                        segmentNumber !== 0 && (
                            <div key={y} className={s.item} style={{width: `${widthSegment}%`}}>
                                <div className={s.date}>
                                    {y}
                                    <div />
                                </div>
                                <div className={s.events}>
                                    {events?.map((event, eventNumber) => (
                                        <React.Fragment key={event.id + segmentNumber}>
                                            <Event
                                                event={event}
                                                eventNumber={eventNumber}
                                                hoveredEventId={hoveredEventId}
                                                setHoveredEventId={setHoveredEventId}
                                                segmentNumber={segmentNumber}
                                            />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <button className={s.final}>Final Test</button>
            </div>
            <MainLink className={classnames(s.disabledLink, !isScrolled && s.disabledLink_active)} isLink={false} onClick={() => setIsScrolled(false)} isBack={true}>Back</MainLink>
        </div>
    )
}

export default Timeline

export type SelectedPartner = {
   value: string
   label: string
}

type PropsType = {
    isScrolled: boolean
    setIsScrolled: any
}