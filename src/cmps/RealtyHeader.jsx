import logoImg from '../assets/img/logo.png'
import headerData from '../data/header.json'
import instagramImg from '../assets/img/icons/instagram.png'
import facebookImg from '../assets/img/icons/facebook.png'
import tiktokImg from '../assets/img/icons/tiktok.png'
import linkedinImg from '../assets/img/icons/linkedin.png'
import youtubeImg from '../assets/img/icons/youtube.png'
import xImg from '../assets/img/icons/x.png'
import whatsappImg from '../assets/img/icons/whatsapp.png'
import searchImg from "../assets/img/icons/search.png"
import { useEffect, useState } from 'react'
import menuImg from "../assets/img/menu.png"
import logoMobileImg from '../assets/img/logo-mobile.png'


const TOP_HEADER_DATA = headerData.filter(item => item.location === 'top')
const BOTTOM_HEADER_DATA = headerData.filter(item => item.location === 'bottom')
const platforms = [
    { _id: 1, name: 'Instagram', img: instagramImg },
    { _id: 2, name: 'Facebook', img: facebookImg },
    { _id: 3, name: 'TikTok', img: tiktokImg },
    { _id: 4, name: 'LinkedIn', img: linkedinImg },
    { _id: 5, name: 'YouTube', img: youtubeImg },
    { _id: 6, name: 'X', img: xImg },
    { _id: 7, name: 'WhatsApp', img: whatsappImg }
]
const breakpoint = 440


export function RealtyHeader() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    function toggleMenu() {
        if (!isMobile) return
        setIsMenuOpen(prev => !prev)
    }

    return <section className="header">
        {isMobile && <div className='menu-cont' onClick={toggleMenu}>
            <img src={menuImg} />
        </div>}
        < div className={`header-main${isMenuOpen ? ' open' : ''}`}>

            <div className='header-top'>
                <div className='platforms'>
                    {platforms.map(item => {
                        return <div key={item._id}>
                            <img src={item.img} />
                        </div>
                    })}
                </div>
                <div className='header-top-menu'>
                    {TOP_HEADER_DATA.map(item => {
                        return <a key={item._id} href="" onClick={e=> e.preventDefault()}>{item.title} </a>
                    })}
                </div>


            </div>
            <div className='header-bottom'>
                <div className='header-input'>
                    <img src={searchImg} alt="" />
                    <input type="text" id='search' />
                    <label htmlFor="search">חיפוש</label>
                </div>
                <div className='header-bottom-menu'>
                    {BOTTOM_HEADER_DATA.map(item => {
                        return <a key={item._id} href="" onClick={e=> e.preventDefault()}>{item.title}</a>
                    })}

                </div>

            </div>

        </div>

        <div className='img-cont'> <img src={isMobile ? logoMobileImg : logoImg} /></div>





    </section >

}