'use client'

import Link from 'next/link'
import classnames from 'classnames'
import {FC, ReactNode} from 'react'

const MainLink: FC<PropsType> = ({
    className,
    href,
    children, isLink = true,
    isBack = false,
    onClick,
    }) => {
    return isLink
        ? (
            <Link
                href={href ?? ''}
                className={classnames(
                    'mainLink',
                    className ?? '',
                    isBack ? 'mainLink_back' : '',
                )}
            >
                <span>{children}</span>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 1.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        ) : (
            <button
                className={classnames(
                    'mainLink',
                    className ?? '',
                    isBack ? 'mainLink_back' : '',
                )}
                onClick={onClick}
            >
                <span>{children}</span>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 1.5L22 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        )
}

export default MainLink

type PropsType = {
    className?: string,
    href?: string
    children: ReactNode
    isLink?: boolean
    isBack?: boolean
    onClick?: any
}