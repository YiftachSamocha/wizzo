import { RealtyArticle } from "./RealtyArticle"
import { RealtyPreview } from "./RealtyPreview"
import articles from "../data/articles.json"
import adEilatImg from '../assets/img/ads/eilat.png'
import adSnowImg from '../assets/img/ads/snow.png'
import adPanelsImg from '../assets/img/ads/panels.png'
import { getRandomArticles } from "../service"
import { useEffect, useState } from "react"

const ARTICLES_AMOUNT_DESKTOP = 6
const ARTICLES_AMOUNT_MOBILE = 3
const BREAKPOINT = 440

export function RealtyHome() {
    const [articlesAmount, setArticlesAmount] = useState(ARTICLES_AMOUNT_DESKTOP)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= BREAKPOINT && articlesAmount !== ARTICLES_AMOUNT_MOBILE)
                setArticlesAmount(ARTICLES_AMOUNT_MOBILE)
            else if (window.innerWidth > BREAKPOINT && articlesAmount !== ARTICLES_AMOUNT_DESKTOP)
                setArticlesAmount(ARTICLES_AMOUNT_DESKTOP)

        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return <section className="home">
        <div className="most-watched">
            <h3>הכתבות הנצפות ביותר</h3>
            <div className="watched-articles">{getRandomArticles(articles, 2).map(item => {
                return <RealtyArticle article={item} key={item._id} />
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
                {getRandomArticles(articles, articlesAmount).map(item => {
                    return <RealtyArticle article={item} key={item._id} />
                })}
            </div>

            <div className="ad-container second">
                <img src={adSnowImg} />
            </div>


        </div>

    </section>



}