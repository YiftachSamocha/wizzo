import { RealtyAd } from "./RealtyAd"
import { RealtyArticle } from "./RealtyArticle"
import { RealtyPreview } from "./RealtyPreview"

const num = [1, 2, 3, 4, 5, 6]
const nostWatched = [1, 2]
export function RealtyHome() {
    return <section className="home">
        <div className="most-watched">
            <div>{nostWatched.map(() => {
                return <RealtyArticle />
            })}</div>
            <RealtyAd />

        </div>
        <div className="main-list">
            <RealtyAd />
            <RealtyPreview />
            <div className="articles-list">
                {num.map(() => {
                    return <RealtyArticle />
                })}
            </div>

        </div>

    </section>



}