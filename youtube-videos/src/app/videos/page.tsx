import React from 'react';

const getVideosData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

export default async function Videos( ) {
    const videos = await getVideosData();

    return (
        <div>
            {videos.map((video: any) => (
                <div key={video.id}>
                    <h1>{video.title}</h1>
                    <p>{video.body}</p>
                </div>
            )
            )}
        </div>
    );
}