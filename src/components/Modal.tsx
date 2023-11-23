import {FC, ReactNode, useCallback, useEffect} from 'react'
import s from '@/styles/Modal.module.scss'
import classnames from 'classnames'
import {svgIcons} from '@/lib/svgIcons'

const Modal: FC<PropsType> = ({ active, setActive, className, children }) => {
    const escFunc = useCallback((e: DocumentEventMap["keydown"]) => {
        if (e.key === 'Escape') {
            setActive(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunc, false)
        return () => {
            document.removeEventListener('keydown', escFunc, false)
        }
    }, [])

    return (
        <>
            <div className={classnames(s.overflow, active && s.active)}/>
            <div
                className={classnames(s.wrapper, active && s.active)}
                onClick={() => setActive(false)}
            >
                <div
                    className={classnames(s.modal, className ?? '')}
                    onClick={e => e.stopPropagation()}
                >
                    <div
                        className={s.close}
                        onClick={() => setActive(false)}
                    >
                        {svgIcons.modal.close}
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal

type PropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children: ReactNode
    className?: string
}