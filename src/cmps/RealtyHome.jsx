import { RealtyArticle } from "./RealtyArticle"
import { RealtyPreview } from "./RealtyPreview"
import articles from "../data/articles.json"
import adEilatImg from '../assets/img/ads/eilat.png'
import adSnowImg from '../assets/img/ads/snow.png'
import adPanelsImg from '../assets/img/ads/panels.png'
import { getRandomArticles } from "../service"

export function RealtyHome() {

    return <section className="home">
        <div className="most-watched">
            <h3>הכתבות הנצפות ביותר</h3>
            <div className="watched-articles">{getRandomArticles(articles, 2).map(item => {
                return <RealtyArticle article={item} />
            })}</div>
            <div className="ad-container">
                <img src={adPanelsImg} />
            </div>
            <RealtyArticle article={getRandomArticles(articles, 1)[0]} />





        </div>
        <div className="vertical-line"></div>
        <div className="main-list">
            <div className="ad-container">
                <img src={adEilatImg} />
            </div>

            <RealtyPreview />
            <div className="articles-list">
                {getRandomArticles(articles, 6).map(item => {
                    return <RealtyArticle article={item} />
                })}
            </div>

            <div className="ad-container">
                <img src={adSnowImg} />
            </div>


        </div>

    </section>



}