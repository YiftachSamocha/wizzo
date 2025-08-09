import articleImg from "../assets/img/article.jpg"
import { getCategoryColor } from "../service"

export function RealtyArticle({ article }) {

    return <div className="article">
        <div className="article-card">
            <img src={articleImg} alt="" />
            <div style={{ backgroundColor: getCategoryColor(article.category) }}>{article.category}</div>
        </div>
        <div className="article-info">
            <p className="title">{article.title}</p>
            <p className="details">{article.date} | {article.writer}</p>

        </div>



    </div>
}