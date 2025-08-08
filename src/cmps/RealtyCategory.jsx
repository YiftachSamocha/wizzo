import symbolImg from '../assets/img/symbol.png'
export function RealtyCategory({ category }) {
    const color = category.color
    return <section className='category'>
        <div>
            <div style={{ backgroundColor: color }} className='arrow'>{'לעמוד המדור >'}</div>
            <div style={{ backgroundColor: color }} className="thin-line"></div></div>
        <div>
            <div className='title'>{category.title}</div>
            <img src={symbolImg} />
        </div>


    </section>
}