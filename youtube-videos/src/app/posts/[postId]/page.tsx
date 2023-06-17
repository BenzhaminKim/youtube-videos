import React from 'react';

export default function Page({ params } : { params: {postId: string}} ) {
    return (
        <div>
            <h1>POSTS {params.postId}</h1>
        </div>
    );
}