import React from 'react';
import { Player, Video, DefaultUi, Youtube} from '@vime/react';

import '@vime/core/themes/default.css'

export function PlayerVideo(props) {

    function videoIdYoutube(url) {
        console.log( url.split("be/")[1].substring(0, 11));
        return url.split("be/")[1].substring(0, 11);
    }
    return (
        <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <Player>
                    <Youtube 
                        videoId={videoIdYoutube(props.filme.url)}
                        key={props.filme.url}/>
                    <DefaultUi/>
                </Player>
            </div>
        </div>
    )
}