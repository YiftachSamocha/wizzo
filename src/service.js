const CATEGORIES = [
    { title: "נדל\"ן למגורים", color: '#e2b00d' },
    { title: "התחדשות עירונית", color: '#55ebb1' },
    { title: "נדל\"ן מניב והשקעות", color: '#21c8fc' },
    { title: "דעות וניתוחים", color: '#377d22' },
    { title: "חדשות הענף", color: '#ea5619' },
    { title: "הפנים מאחורי", color: '#A31F1F' },
    { title: "עיצוב ואדריכלות", color: '#F202D5' }
]
export function getCategories(category) {
    return CATEGORIES.find(cat => cat.title === category).color
}