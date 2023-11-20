import s from '@/styles/Home.module.scss'
import React, {FC, useState} from 'react'
import Filter from "@/components/HomePage/Filter";
import MainLink from "@/components/MainLink";
import classnames from "classnames";

const Timeline: FC<PropsType> = ({ isScrolled, setIsScrolled }) => {
    const [selectedFields, setSelectedFields] = useState<string[]>([])
    const [selectedPartners, setSelectedPartners] = useState<SelectedPartner[]>([])

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