const videos = [1, 2, 3]
export function RealtyVideo() {
    return <section className="video">
        <div className="video-list">
            {videos.map(() => {
                return <div className="video-item"></div>
            })}

        </div>
        <div className="video-preview"></div>

    </section>
}