import { RealtyArticle } from "./RealtyArticle"
import { RealtyTitle } from "./RealtyTitle"
import articles from "../data/articles.json"

const categories = [
    "נדל\"ן למגורים",
    "התחדשות עירונית",
    "נדל\"ן מניב והשקעות",
    "דעות וניתוחים",
    "חדשות הענף",
    "הפנים מאחורי",
    "עיצוב ואדריכלות"
]


export function RealtyList() {
    return <section className="list">
        {categories.map(category => {
            return <div className="list-item">
                <RealtyTitle />
                <div>
                    {articles.filter(article => article.category === category)
                        .map(item => {
                            return <RealtyArticle article={item} />
                        })}
                </div>

            </div>
        })}
    </section>

}