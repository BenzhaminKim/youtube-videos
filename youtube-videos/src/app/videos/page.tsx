"use client"
import React from "react";
import type { Metadata } from 'next';
import getAllVideos from '@/lib/getVideos';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export default async function UsersPage() {
    const videoData: Promise<videoListResponse> = getAllVideos();

    const video = await videoData;
    console.log("hello")

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <Box sx={{ flexGrow: 1 }} pt={1}>
                <Grid container spacing={2}>

                    <Grid xs={12} sm={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                    sx={{ height: 140 }}
                    image={video.snippet.thumbnails.default.url}
                    title={video.snippet.title}
                  /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    asd
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    111 Views
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    111
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
            <br />

            <Box sx={{ flexGrow: 1 }} pt={1}>
                <Grid container spacing={2}>
                    {video.items.map(video => {
                        return (
                            <Grid xs={12} sm={12} md={4} key={video.id}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={video.snippet.thumbnails.default.url}
                                    title={video.snippet.title}
                                />
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {video.snippet.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">{video.statistics.likeCount}</Typography>
                                        <Typography variant="body2" color="text.secondary">{video.snippet.publishedAt}</Typography>
                                        <p>{video.statistics.likeCount}</p>
                                        <p>{video.statistics.commentCount}</p>
                                        <p>{video.statistics.favoriteCount}</p>

                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </section>
    )
    return content;
}