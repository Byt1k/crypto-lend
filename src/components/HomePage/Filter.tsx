import React, {FC} from 'react'
import s from '@/styles/Filter.module.scss'
import classnames from 'classnames'
import { MultiSelect } from "react-multi-select-component";
import {SelectedPartner} from "@/components/HomePage/Timeline";
import FilterItem from "@/components/HomePage/FilterItem";

const Filter: FC<PropsType> = ({
    selectedFields,
    setSelectedFields,
    selectedPartners,
    setSelectedPartners,
    isScrolled,
}) => {
    const fields = [
        {
            id: 'hacks',
            name: 'Hacks',
        },
        {
            id: 'inovations',
            name: 'Inovations',
        },
        {
            id: 'marketActions',
            name: 'Market Actions',
        },
        {
            id: 'regulations',
            name: 'Regulations/Legal Decisions',
        },
        {
            id: 'adoption',
            name: 'Adoption',
        },
        {
            id: 'deFi',
            name: 'DeFi',
        },
        {
            id: 'cryptoInCulture',
            name: 'Crypto in Culture',
        },
        {
            id: 'NFTs',
            name: 'NFTs',
        },
        {
            id: 'layer1s',
            name: 'Layer 1s',
        },
        {
            id: 'layer2s',
            name: 'Layer 2s',
        },
        {
            id: 'investments',
            name: 'Investments',
        },
    ]

    const toggleSelectedFields = (id: string) => {
        selectedFields?.some(f => f === id)
            ? setSelectedFields(prev => prev.filter(f => f !== id))
            : setSelectedFields(prev => [...prev, id])
    }

    const partnersOptions: SelectedPartner[] = []

    return (
        <div className={classnames(s.filter, isScrolled && s.filter_active)}>
            <FilterItem
                isActive={!selectedFields?.length}
                onClick={() => setSelectedFields([])}
            >
                All
            </FilterItem>
            <MultiSelect
                options={partnersOptions}
                value={selectedPartners}
                onChange={setSelectedPartners}
                labelledBy="partners"
                disableSearch={true}
                hasSelectAll={false}
                overrideStrings={{
                    selectSomeItems: 'Our Partners',
                }}
            />
            {fields.map(item => (
                <React.Fragment key={item.id}>
                    <FilterItem
                        isActive={selectedFields.some(id => id === item.id)}
                        onClick={() => toggleSelectedFields(item.id)}
                    >
                        {item.name}
                    </FilterItem>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Filter

type PropsType = {
    selectedFields: string[]
    setSelectedFields: (arr: ((prev: string[]) => string[]) | string[]) => void
    selectedPartners: SelectedPartner[]
    setSelectedPartners: (arr: ((prev: SelectedPartner[]) => SelectedPartner[]) | SelectedPartner[]) => void
    isScrolled: boolean
}