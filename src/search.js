import React, {useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import { VideoContext } from "./App.js";
import ReactPlayer from "react-player";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Search() {
  const videoList=useContext(VideoContext);
  const [video,setVideo]=useState(videoList);
  const {keyword} = useParams();
  const navigate = useNavigate();
  
    
  useEffect(()=>{
    const targetVideo=videoList.filter((video)=>{
     return video.title.toLowerCase().includes(keyword.toLowerCase());
    });
    if(targetVideo){
      setVideo(targetVideo);
    }else{
      alert("없는 제목입니다");
      navigate("/", {replace:true});
    }
  },[keyword]);

  return (
    <div>
        <h1>List</h1>
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {video.map((val, index)=>{
      return(
            <div style={{width:"380px", padding:"10px"}} key={val.index}>
            <Card sx={{ maxWidth: 380 }}>
            <ReactPlayer url={val.url} controls={true} width="100%"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>카테고리/ {val.category}</p>
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

export default Search;
