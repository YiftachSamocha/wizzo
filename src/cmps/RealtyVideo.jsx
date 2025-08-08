import { RealtyCategory } from "./RealtyCategory"
import videosData from '../data/videos.json'
const videos = videosData.slice(1, 4)
const videoPreview = videosData.slice(0, 1)[0]



export function RealtyVideo() {
    return <section className="video">
        <RealtyCategory category={{ title: "נדל\"ן TV", color: '#d10e89' }} />
        <div className="video-main">
            <div className="video-list">
                {videos.map(video => {
                    return <div className="video-item">
                        <div className="video-info">
                            <p className="title">{video.title}</p>
                            <p className="details">{video.date} | {'מרכז הנדל\"ן'}</p>
                        </div>
                        <div className="video-cont">
                            <video src={video.url} controls>  </video>
                            <div>{'נדל\"ן TV'}</div>
                        </div>

                    </div>
                })}

            </div>
            <div className="video-preview">
                <div className="video-cont">
                    <video src={videoPreview.url} controls>  </video>
                    <div>{'נדל\"ן TV'}</div>
                </div>
                <div>
                    <div className="video-info">
                        <p className="details">{videoPreview.date} | {'מרכז הנדל\"ן'}</p>
                        <p className="title">{videoPreview.title}</p>
                        <p className="description">{videoPreview.description}</p>
                    </div>
                    
                </div>


            </div>
        </div>


    </section>
}