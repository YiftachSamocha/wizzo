const CATEGORIES = [
    { title: "נדל\"ן למגורים", color: '#E2B00D' },
    { title: "התחדשות עירונית", color: '#55EBB1' },
    { title: "נדל\"ן מניב והשקעות", color: '#21C8FC' },
    { title: "דעות וניתוחים", color: '#377D22' },
    { title: "חדשות הענף", color: '#EA5619' },
    { title: "הפנים מאחורי", color: '#A31F1F' },
    { title: "עיצוב ואדריכלות", color: '#F202D5' }
]
export function getCategories(category) {
    return CATEGORIES.find(cat => cat.title === category).color
}
export function getRandomArticles(articles, num) {
    const shuffled = [...articles].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, num)
}