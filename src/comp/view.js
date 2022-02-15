import React from 'react';
import ReactPlayer from 'react-player';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function View({data}) {

  return (
    <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {data.map((val)=>{
      return(
            <div style={{width:"380px", padding:"10px"}}>
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
  );
}

export default View;
