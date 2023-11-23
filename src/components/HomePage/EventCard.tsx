import s from '@/styles/EventCard.module.scss'
import FilterItem from '@/components/HomePage/FilterItem'
import Link from 'next/link'

const EventCard = () => {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src="/card.png" alt="card"/>
            </div>
            <div>
                <div className={s.attachment}>
                    <FilterItem className={s.attachment__item}>Hacks</FilterItem>
                    <Link href="/keyfigure/id">
                        <FilterItem className={s.attachment__item}>
                            <img src="/key-figure-icon.png" alt="icon"/>
                            Key figure: David Marcus
                        </FilterItem>
                    </Link>
                </div>
                <p className={s.title}>Facebook Releases Whitepaper  for Libra Currency</p>
                <p className={s.date}>June 18, 2018</p>
                <p className={s.desc}>Facebook released the white paper for its long-awaited stablecoin, Libra, which was intended to be the internal currency for Facebook, Instagram, and Whatsapp. Libra was built on the native and scalable Libra blockchain, and was backed by bank deposits and short-term government securities. The stablecoin was not pegged to any national fiat currency, and therefore could not be redeemed for fiat.
                    <br/><br/>
                    The company also announced the release of the Libra Investment Token, which could be purchased or distributed as dividends to founding members and accredited investors.
                </p>
                <button className={s.btn}>Read the article</button>
            </div>
        </div>
    )
}

export default EventCard