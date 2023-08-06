"use client"
import React from "react";
import useSWR from 'swr'
import { use } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';



export default async function Home() {
  // const { data, error, isLoading } = useSWR(
  //   'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyA_g1VitbPAwoZ3qwAzM7c-ZiO76CAtTNs&part=snippet,contentDetails,statistics,status',
  //   fetcher
  // );

  // if (error) return "An error has occurred.";
  // if (isLoading) return "Loading...";
  // const videos = data;
  return (
    <div>
      <h1>Youtube Videos</h1>
    </div>  
    // <Box sx={{ flexGrow: 1 }} pt={1}>
    //   <Grid container spacing={2}>
    //         {videos.items.map((video: VideoDetailResponse) => (
    //           <Grid xs={12} sm={12} md={4}>
    //             <Card sx={{ maxWidth: 345 }}>
    //               <CardMedia
    //                 sx={{ height: 140 }}
    //                 image={video.snippet.thumbnails.default.url}
    //                 title={video.snippet.title}
    //               />
    //               <CardContent>
    //                 <Typography gutterBottom variant="h5" component="div">
    //                 {video.snippet.title}
    //                 </Typography>
    //                 <Typography variant="body2" color="text.secondary">
    //                 {video.statistics.viewCount} Views
    //                 </Typography>
    //                 <Typography variant="body2" color="text.secondary">
    //                 {video.snippet.publishedAt}
    //                 </Typography>
    //               </CardContent>
    //             </Card>
    //           </Grid>
    //         )
    //         )}
    //   </Grid>
    // </Box>
  )
}
