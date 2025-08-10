import podcasts from '../data/podcasts.json'
import headphonesImg from '../assets/img/headphones.png'
import playerImg from '../assets/img/player.png'
import { RealtyCategory } from './RealtyCategory'
import danImg from '../assets/img/podcast/dan.png'
import davidImg from '../assets/img/podcast/david.png'
import jacobImg from '../assets/img/podcast/jacob.png'

podcasts[0].img = danImg
podcasts[1].img = davidImg
podcasts[2].img = davidImg
podcasts[3].img = jacobImg

export function RealtyPodacst() {
    return <section className="podcast">
        <RealtyCategory category={{ title: 'פודקאסטים', color: '#d10e89' }} />
        <div className="podcast-list">
            {podcasts.map(podcast => {
                return <div className="podcast-item" key={podcast._id}>
                    <div className='podcast-icons'>
                        <img src={headphonesImg} />
                        <img src={playerImg} />
                    </div>
                    <div className='podcast-info'>
                        <div>
                            <p className='host'>{podcast.host}</p>
                            <p className='host-info'>{podcast.hostInfo}</p>
                            <p className='quote'>"{podcast.quote}"</p>
                        </div>
                        <p className='details'>פודקאסטים | {podcast.date} | מערכת מרכז הנדל"ן</p>
                    </div>
                    <div className="podcast-cont">
                        <img src={podcast.img} />
                        <div>פודקאסטים</div>
                    </div>
                </div>
            })}
        </div>
    </section>
}