import s from '@/styles/Home.module.scss'
import React, {FC, useState} from 'react'
import Filter from "@/components/HomePage/Filter";
import MainLink from "@/components/MainLink";
import classnames from "classnames";

const Timeline: FC<PropsType> = ({ isScrolled, setIsScrolled }) => {
    const [selectedFields, setSelectedFields] = useState<string[]>([])
    const [selectedPartners, setSelectedPartners] = useState<SelectedPartner[]>([])

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
                    {maxViewYears?.map((y, i) => (
                        i !== 0 && (
                            <div key={y} className={s.item} style={{width: `${widthSegment}%`}}>
                                <div className={s.date}>
                                    {y}
                                    <div />
                                </div>
                                <div className={s.events}>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
                                    <div className={s.events__item} style={{width: '10px', minWidth: '10px', height: '10px'}}></div>
                                    <div className={s.events__item} style={{width: '9px', minWidth: '9px', height: '9px'}}></div>
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