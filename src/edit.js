import React, { useState, useContext } from "react";
import { VideoContext, VideoDispatchContext } from "./App.js";
import ReactPlayer from "react-player";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Edit() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [no, setNo] = useState("");
  const [url, setUrl] = useState("");
  const { onEdit, onRemove } = useContext(VideoDispatchContext);
  const videoList = useContext(VideoContext);

  const handleSubmit = (no,url) => {
    if(window.confirm( "수정하시겠습니까?" )){
      setNo(no);  
      setUrl(url);  
      onEdit(no,title,category,url);
     };
  };
  const handleRemove = (no) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(no);
    }
  };

  // useEffect(videoList,[]);

  return (
    <div className="Edit"> 
    <h1>Edit</h1>
      <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {videoList && videoList.map((val,no)=>{
      return(
        <div style={{width:"350px", padding:"10px"}} key={no}>
        <Card sx={{ maxWidth: 350 }}>
        <ReactPlayer url={val.url} controls={true} width="100%"/>
        <CardContent>
          <Input placeholder={"수정할 제목 입력"} defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}} />
          <Input placeholder={"수정할 카테고리 입력"} defaultValue={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        </CardContent>
         <Tooltip title="Delete">
           <IconButton onClick={(e)=>{handleRemove(val.no)}}><DeleteIcon /></IconButton>
           </Tooltip>
           <Tooltip title="edit">
              <Button onClick={(e)=>{handleSubmit(val.no,val.url)}}>수정완료</Button>
          </Tooltip>
        </Card>
        </div>
          )
        })}
        </div>
       <div style={{height:"50px",width:"100%"}}></div>
    </div>
  );
}


export default Edit;
