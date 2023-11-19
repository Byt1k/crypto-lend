import BurgerMenu from '@/components/BurgerMenu'
import s from '@/styles/Home.module.scss'
import classnames from 'classnames'
import MainLink from '@/components/MainLink'

export default function Home() {
  return (
      <>
          <BurgerMenu />
          <div className={classnames('container', s.home)}>
              <img src="/logo.svg" alt="logo" className={s.logo} />
              <h1>
                  History of Crypto:
                  <span>An Interactive Journey</span>
                  Through Time
              </h1>
              <p className={s.text}>From the inception of Bitcoin in 2009 to the rise of decentralized finance and beyond, delve into the transformative history of cryptocurrency and its impact on the global financial landscape. </p>
              <MainLink>View timeline</MainLink>
          </div>
          <div className="lines">
              <img src="/lines.svg" className="lines" alt="lines" />
          </div>
      </>
  )
}
