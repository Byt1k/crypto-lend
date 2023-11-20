import {FC} from 'react'
import s from '@/styles/Home.module.scss'
import classnames from 'classnames'
import { MultiSelect } from "react-multi-select-component";
import {SelectedPartner} from "@/components/HomePage/Timeline";

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
            <button
                className={
                    classnames(
                        s.filter__item,
                        !selectedFields?.length && s.filter__item_active,
                    )
                }
                onClick={() => setSelectedFields([])}
            >
                All
            </button>
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
                <button
                    key={item.id}
                    className={
                        classnames(
                            s.filter__item,
                            selectedFields.some(id => id === item.id) && s.filter__item_active
                        )
                    }
                    onClick={() => toggleSelectedFields(item.id)}
                >
                    {item.name}
                </button>
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