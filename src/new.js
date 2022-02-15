import React, {useState,useContext} from 'react';
import { VideoDispatchContext } from './App';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

function New() {
  const [title, setTitle]=useState("");
  const [category, setCategory]=useState("");
  const [url, setUrl]=useState("");
  const { onCreate } = useContext(VideoDispatchContext);
  const navigate = useNavigate();

    const upload=(e)=>{
      onCreate(title, category, url);
      navigate("/home");
    };

  return (
  <div style={{marginTop:50}}>
    <h1>링크 추가</h1>
     <Box
      sx={{
        width: 900,
        maxWidth: '100%',
        margin:"0 auto"
      }} >
     <form onSubmit={upload}>
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
       <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
     <TextField sx={{width:"65%"}} label="URL" id="fullWidth" margin="normal" onChange={(e)=>{setUrl(e.target.value);}} />
     </Box>
     <Paper style={{width:"70%",padding:"20px",margin:"20px auto"}} elevation={3}>
      <TextField fullWidth label="제목" id="fullWidth" margin="normal" onChange={(e)=>{setTitle(e.target.value);}} />
      <TextField fullWidth label="카테고리" id="fullWidth" margin="normal" onChange={(e)=>{setCategory(e.target.value);}} />
      <Button style={{width:"50%", padding:"10px 0"}} variant="outlined" type="reset">취소</Button>
      <Button style={{width:"50%", padding:"10px 0"}} variant="contained" type="submit">업로드</Button>
      </Paper>
      </form>
    </Box>
  </div>
  );
};

export default New;
