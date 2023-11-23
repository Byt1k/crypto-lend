import {FC, MouseEventHandler, ReactNode} from 'react'
import classnames from 'classnames'
import s from '@/styles/Filter.module.scss'

const FilterItem: FC<PropsType> = ({ className, isActive, onClick, children }) => {
    return (
        <div
            className={
                classnames(
                    s.filter__item,
                    isActive && s.filter__item_active,
                    className ?? ''
                )
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default FilterItem

type PropsType = {
    className?: string
    isActive?: boolean
    onClick?: MouseEventHandler<HTMLDivElement>
    children: ReactNode
}