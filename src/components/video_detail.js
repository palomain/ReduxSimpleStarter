/**
 * Created by carhe on 8/27/2017.
 */
import React from 'react'

const VideoDetail = ({video})=>{
    if(!video){
        return (<div>Loading...</div>);
    }

    const videoId = video.id.videoId;

    const url = `https://www.youtube.com/embed/${videoId}`;


    return (
    <div className="vide-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
        </div>

        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div> )
};

export  default VideoDetail;