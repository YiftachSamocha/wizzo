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
];


export function RealtyHeader() {
    return <section className="header">
        <div className="header-main">

            <div className='header-top'>
                <div className='platforms'>
                    {platforms.map(item => {
                        return <div>
                            <img src={item.img} />
                        </div>
                    })}
                </div>
                <div className='header-top-menu'>
                    {TOP_HEADER_DATA.map(item => {
                        return <a href="">{item.title}</a>
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
                        return <a href="">{item.title}</a>
                    })}

                </div>

            </div>
        </div>

        <img src={logoImg} />



    </section>

}