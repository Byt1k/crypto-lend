'use client'

import s from '@/styles/BurgerMenu.module.scss'
import {FC, useEffect, useState, useRef} from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import {svgIcons} from '@/lib/svgIcons'

const BurgerMenu: FC = () => {
    const [active, setActive] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const burgerRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        document.addEventListener( 'click', (e) => {
            const action = e.composedPath().includes(menuRef.current as EventTarget)
                || e.composedPath().includes(burgerRef.current as EventTarget)

            if (!action) {
                setActive(false)
            }
        })
    }, [])

    return (
        <>
            <div className={s.backlight} />
            <img
                src="/burger.svg"
                alt="burger" className={s.burger}
                onClick={() => setActive(true)}
                ref={burgerRef}
            />
            <div className={classnames(s.menu, active && s.active)} ref={menuRef}>
                <div className={s.menu__head}>
                    {svgIcons.burgerMenu.logo}
                    <div className={s.close} onClick={() => setActive(false)}>
                        {svgIcons.burgerMenu.close}
                    </div>
                </div>
                <Link href="/" className={s.menu__item}>
                    <div className={s.icon}>
                        {svgIcons.burgerMenu.timeline}
                    </div>
                    <span>Timeline</span>
                </Link>
                <Link href="/company" className={s.menu__item}>
                    <div className={s.icon}>
                        {svgIcons.burgerMenu.company}
                    </div>
                    <span>Your Company</span>
                </Link>
                <Link href="/about" className={s.menu__item}>
                    <div className={s.icon}>
                        {svgIcons.burgerMenu.about}
                    </div>
                    <span>About</span>
                </Link>
                <Link href="/keyfigures" className={s.menu__item}>
                    <div className={s.icon}>
                        {svgIcons.burgerMenu.keyFigure}
                    </div>
                    <span>Key Figure</span>
                </Link>
            </div>
        </>
    )
}

export default BurgerMenu