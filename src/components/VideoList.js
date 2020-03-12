import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => { // allows you to remove 'props' from the left-most operator
   
      const renderedList = videos.map((video) => { // iterate over video list and assign to an array that will be rendered on screen
            return <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video} 
            />;
        });

        return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
        );
};

export default VideoList;
