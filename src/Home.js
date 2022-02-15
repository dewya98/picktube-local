import React, {useContext, useState} from 'react';
import { VideoContext } from "./App.js";
import ReactPlayer from "react-player";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
  const videoList=useContext(VideoContext);
  const categorize=[...new Set(videoList.map((val)=>val.category))];
  const [data,setData]=useState(videoList);
 
   const filtered = (curcat) => {
     const filteredVideo = videoList.filter((rs)=>{
       return rs.category === curcat;
     });
    setData(filteredVideo);
   };

  // useEffect(videiList,[]);

  return (
    <div className="Home">
      <Stack direction="row" spacing={2} marginTop="20px">
      {categorize.map((val,index)=>{
        return(
       <Button variant="contained" onClick={(e)=>{filtered(val)}} key={index} >{val}</Button>
        );
      })}
    </Stack>
        <h1>List</h1>
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {data && data.map((val)=>{
      return(
            <div style={{width:"380px", padding:"10px"}}>
            <Card sx={{ maxWidth: 380 }}>
            <ReactPlayer url={val.url} controls={true} width="100%"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  카테고리/ {val.category}
                </Typography>
              </CardContent>
              </Card>
         </div>
          )
        })}
        </div>
        <div style={{width:"100%", height:"50px"}}></div>
    </div>
  );
}

export default Home;
