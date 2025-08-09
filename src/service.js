import categories from './data/categories.json'
export function getCategoryColor(category) {
    if (!category) return null
    return categories.find(cat => cat.title === category).color
}
export function getRandomArticles(articles, num) {
    const shuffled = [...articles].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, num)
}