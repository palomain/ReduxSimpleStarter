/**
 * Created by carhe on 8/27/2017.
 */
import React from 'react'
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videos =  props.videos.map(video=><VideoListItem video={video} key={video.etag}/> );
    return (<ul className="col-md-4 list-group">
        {videos}
    </ul>);
}

export default VideoList;