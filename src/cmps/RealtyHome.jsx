import { RealtyAd } from "./RealtyAd"
import { RealtyArticle } from "./RealtyArticle"
import { RealtyPreview } from "./RealtyPreview"
import articles from "../data/articles.json"

function getMostViewed(articles) {
    return [...articles]
        .sort((a, b) => b.views - a.views)
        .slice(0, 2)
}
export function RealtyHome() {
    const mostViewed = getMostViewed(articles)
    return <section className="home">
        <div className="most-watched">
            <div>{mostViewed.map(item => {
                return <RealtyArticle article={item} />
            })}</div>
            <RealtyAd />

        </div>
        <div className="main-list">
            <RealtyAd />
            <RealtyPreview />
            <div className="articles-list">
                {articles.map(item => {
                    return <RealtyArticle article={item} />
                })}
            </div>

        </div>

    </section>



}