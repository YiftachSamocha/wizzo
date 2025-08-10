import doronImg from '../assets/img/doron.png'
const article = {
    date: '11-06',
    writer: 'דורון ברויטמן',
    img: doronImg,
    category: 'התחדשות עירונית',
    title: 'אושרה תוכנית העיצוב של צמח המרמן ואזורים למגדל יוקרה במתחם דפנה',
    description: 'כשנתיים לאחר הזכייה במכרז דיירים, אושרה תוכנית העיצוב האדריכלי לפרויקט פינוי-בינוי במסגרתו ייהרסו במרכז ת"א 66 דירות וייבנה מגדל בן 25 קומות'
}

export function RealtyPreview() {
    return <section className='preview'>
        <div className='preview-info'>
            <p className='details'>{article.date} | {article.writer}</p>
            <p className='title'>{article.title}</p>
            <p className='description'>{article.description}</p>
        </div>
        <div className='preview-card'>
            <img src={article.img} />
            <div>{article.category}</div>
        </div>
    </section>
}