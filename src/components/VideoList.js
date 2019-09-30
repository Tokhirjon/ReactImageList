import React from 'react';
import VideItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList=videos.map(video =>{
       return <VideItem 
       onVideoSelect={onVideoSelect} 
       video={video}
           key={video.id.videoId}
       /> 
    });

    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    );
}
export default VideoList;