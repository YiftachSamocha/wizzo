import { useEffect, useState } from 'react'
import symbolImg from '../assets/img/symbol.png'
import arrowRightImg from '../assets/img/arrow-left.png'
const BREAKPOINT = 440

export function RealtyCategory({ category }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= BREAKPOINT)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const color = category.color

    return <section className='category'>
        <div>
            <div style={{ backgroundColor: color }} className='arrow'>
                <p>{!isMobile ? 'לעמוד המדור' : ''}</p>
                <img src={arrowRightImg} />

            </div>
            <div style={{ backgroundColor: color }} className="thin-line"></div></div>
        <div>
            <div className='title'>{category.title}</div>
            <img src={symbolImg} />
        </div>
    </section>
}