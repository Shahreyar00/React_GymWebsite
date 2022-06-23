import React from 'react';
import { Loader } from "../../components";
import "./exerciseVideos.css";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />;

    return (
        <div className="videos__container">
            <div className="videos__wrapper">
                <div className="videos__title">
                    Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
                </div>
                <div className="exerciseVideos">
                    {exerciseVideos?.slice(0,4)?.map((item,index)=>(
                        <a 
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            key={index}
                            className="exercise-video"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <div className="videoDesc">
                                <div className="videoTitle">
                                    {item.video.title}
                                </div>
                                <div className="videoChannel">
                                    {item.video.channelName}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExerciseVideos