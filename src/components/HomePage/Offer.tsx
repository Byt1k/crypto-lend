import React, {FC} from 'react';
import classnames from 'classnames'
import s from '@/styles/Home.module.scss'
import MainLink from '@/components/MainLink'

const Offer: FC<PropsType> = ({ setIsScrolled }) => {
    return (
        <div className={classnames('container', s.home)}>
            <img src="/logo.svg" alt="logo" />
            <h1>
                History of Crypto:
                <span>An Interactive Journey</span>
                Through Time
            </h1>
            <p className={s.text}>From the inception of Bitcoin in 2009 to the rise of decentralized finance and beyond, delve into the transformative history of cryptocurrency and its impact on the global financial landscape. </p>
            <MainLink isLink={false} onClick={() => setIsScrolled(true)}>View timeline</MainLink>
        </div>
    )
}

export default Offer

type PropsType = {
    setIsScrolled: any
}