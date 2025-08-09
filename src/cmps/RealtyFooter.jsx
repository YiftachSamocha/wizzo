import logoImg from '../assets/img/logo.png'
import xImg from '../assets/img/icons-footer/x.png'
import whatsappImg from '../assets/img/icons-footer/whatsapp.png'
import instagramImg from '../assets/img/icons-footer/instagram.png'
import tiktokImg from '../assets/img/icons-footer/tiktok.png'
import linkedinImg from '../assets/img/icons-footer/linkedin.png'
import youtubeImg from '../assets/img/icons-footer/youtube.png'
import facebookImg from '../assets/img/icons-footer/facebook.png'
import footerData from '../data/footer.json'
import wizzoImg from '../assets/img/wizzo.png'

const PLATFORMS = [
    { _id: 1, name: 'Instagram', img: instagramImg },
    { _id: 2, name: 'Facebook', img: facebookImg },
    { _id: 3, name: 'TikTok', img: tiktokImg },
    { _id: 4, name: 'LinkedIn', img: linkedinImg },
    { _id: 5, name: 'YouTube', img: youtubeImg },
    { _id: 6, name: 'X', img: xImg },
    { _id: 7, name: 'WhatsApp', img: whatsappImg }
]
const SUBJECTS = ["רכישה והשכרת נדל\"ן", "התחדשות עירונית", "מדריכים כללי", 'מרכז הנדל\"ן',]

export function RealtyFooter() {
    return <section className="footer">
        <div className='upper-footer'>
            <div className='platforms'>
                {PLATFORMS.map(platform => {
                    return <div key={platform._id}>
                        <img src={platform.img} />
                    </div>
                })}
            </div>
            <img src={logoImg} />
        </div>
        <div className='mid-footer'>
            {SUBJECTS.map(subject => {
                return <div key={subject}>
                    <p className='title'>{subject}</p>
                    <div>
                        {footerData.filter(item => item.subject === subject)
                            .map(item => {
                                return <p key={item._id}>{item.title}</p>
                            })}
                        <p className='read-more'>קרא עוד ↓</p>
                    </div>
                </div>
            })}

        </div>
        <div className='lower-footer'>
            <p>© כל הזכויות שמורות למרכז הנדל"ן ישראל - סקאלה ד.מ בע"מ Scala Group D.M</p>
            <div className='dev'>
                <img src={wizzoImg} />
                <p>פיתוח האתר</p>

            </div>
            <div className='design'>
                <p>Yiftach Samocha</p>
                <p>אפיון ועיצוב האתר</p>

            </div>
        </div>
    </section>
}