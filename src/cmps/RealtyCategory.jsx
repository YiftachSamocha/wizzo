import { useEffect, useState } from 'react'
import symbolImg from '../assets/img/symbol.png'
const breakpoint = 440
export function RealtyCategory({ category }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const color = category.color

    return <section className='category'>
        <div>
            <div style={{ backgroundColor: color }} className='arrow'>{`${!isMobile ? 'לעמוד המדור' : ''}  >`}</div>
            <div style={{ backgroundColor: color }} className="thin-line"></div></div>
        <div>
            <div className='title'>{category.title}</div>
            <img src={symbolImg} />
        </div>


    </section>
}