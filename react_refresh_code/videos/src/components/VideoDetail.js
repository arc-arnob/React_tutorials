import React from 'react'

const VideoDetail=({video})=> {
    if (!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div>
                {video.snippet.title}
            </div>
        </div>
    )
}
export default VideoDetail