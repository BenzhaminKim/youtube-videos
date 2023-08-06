import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Nav';
import getAllVideos from './api/getVideos';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

function App() {
  // const videoData: Promise<videoListResponse> = getAllVideos();

  // const video = videoData;
  console.log("hello")

  return (
    <div className="App">
      <ButtonAppBar />

      <Box sx={{ flexGrow: 1 }} pt={1}>
        <Grid container spacing={2}>

          <Grid xs={12} sm={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://img.freepik.com/free-vector/youtube-background-thumbnail-with-text-full-editable-template_1361-2732.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  youtube-thumbnail
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
    </div>
  );
}

export default App;
