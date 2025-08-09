import { RealtyArticle } from "./RealtyArticle"
import articles from "../data/articles.json"
import { RealtyCategory } from "./RealtyCategory"
import { useEffect, useState } from "react"

import CATEGORIES_DATA from '../data/categories.json' 
const BREAKPOINT = 440
const CATEGORIES_AMOUNT_DESKTOP = 7
const CATEGORIES_AMOUNT_MOBILE = 1




export function RealtyList() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT)
    const [categories, setCategories] = useState(CATEGORIES_DATA)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINT)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isMobile && categories.length !== CATEGORIES_AMOUNT_MOBILE) {
            setCategories(CATEGORIES_DATA.slice(0, CATEGORIES_AMOUNT_MOBILE))
        } else if (!isMobile && categories.length !== CATEGORIES_AMOUNT_DESKTOP) {
            setCategories(CATEGORIES_DATA.slice(0, CATEGORIES_AMOUNT_DESKTOP))
        }
    }, [isMobile])
    return <section className="list">
        {categories.map(category => {
            return <div className="list-item" key={category.title}>
                <RealtyCategory category={category} />
                <div className="items">
                    {articles.filter(article => article.category === category.title)
                        .map(item => {
                            return <RealtyArticle article={item} key={item._id}/>
                        })}
                </div>

            </div>
        })}
    </section>

}