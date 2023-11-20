'use client'

import BurgerMenu from '@/components/BurgerMenu'
import Offer from '@/components/HomePage/Offer'
import Timeline from '@/components/HomePage/Timeline'
import {useState} from 'react'
import classnames from 'classnames'
import s from '@/styles/Home.module.scss'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false)

    return (
      <>
          <div className={classnames(s.animation, isScrolled && s.hidden)}>
              <BurgerMenu />
              <Offer setIsScrolled={setIsScrolled} />
          </div>

          <Timeline isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

          <div className={classnames('lines', s.animation)}>
              <img src="/lines.svg" className="lines" alt="lines" />
          </div>
      </>
    )
}
