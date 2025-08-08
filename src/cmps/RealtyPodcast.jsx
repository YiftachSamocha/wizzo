
const podcasts = [1, 2, 3, 4]
export function RealtyPodacst() {
    return <section className="podcast">
     
        <div className="podcast-list">
            {podcasts.map(() => {
                return <div className="podcast-item"></div>
            })}


        </div>

    </section>
}