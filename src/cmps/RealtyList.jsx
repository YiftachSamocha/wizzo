import { RealtyArticle } from "./RealtyArticle"
import articles from "../data/articles.json"
import { getCategories } from "../service"
import { RealtyCategory } from "./RealtyCategory"

const categories = getCategories()


export function RealtyList() {
    return <section className="list">
        {categories.map(category => {
            return <div className="list-item">
                <RealtyCategory category={category} />
                <div>
                    {articles.filter(article => article.category === category.title)
                        .map(item => {
                            return <RealtyArticle article={item} />
                        })}
                </div>

            </div>
        })}
    </section>

}