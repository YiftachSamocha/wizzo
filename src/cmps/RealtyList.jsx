import { RealtyArticle } from "./RealtyArticle"

const categories = ['1', '2', '3', '4']
const articles = [1, 2, 3, 4]
export function RealtyList() {
    return <section className="list">
        {categories.map(() => {
            return <div className="list-item">
                <h1>Category</h1>
                <div>
                    {articles.map(() => {
                       return <RealtyArticle />
                    })}
                </div>

            </div>
        })}
    </section>

}