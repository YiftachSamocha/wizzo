import articleImg from "../assets/img/article.jpg"
import { getCategories } from "../service"

export function RealtyArticle({ article }) {

    return <div className="article">
        <div className="article-card">
            <img src={articleImg} alt="" />
            <div style={{ backgroundColor: getCategories(article.category) }}>{article.category}</div>
        </div>
        <div className="article-info">
            <p>{article.title}</p>
            <div>
                <p>{article.date}</p> | <p>{article.writer}</p>
            </div>
        </div>



    </div>
}