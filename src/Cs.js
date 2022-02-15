import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Private from './comp/private';
import Faq from './comp/faq';

function Cs() {
  return(
     <div>
       <h1>SUPPORT</h1>
       <div style={{textAlign:"left", marginLeft:"20px"}}>
         <h2>1:1문의하기</h2>
       </div>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '99.2%' }
      }}
      noValidate
      autoComplete="off">
       <TextField
          id="outlined-multiline-static"
          label="문의하기"
          multiline
          rows={3}
          placeholder="문의 내용을 입력해주세요"
        />
      <Button variant="contained" fullWidth style={{lineHeight:"40px", width:"99.3%"}}>문의하기</Button>
      </Box>

      <div style={{textAlign:"left", margin:"20px"}}>
        <h2>FAQ</h2></div>
        <Faq />

      <div style={{textAlign:"left", margin:"30px 20px"}}>
        <h2>고객센터</h2>
        <h2>1577-1234</h2><br/>
        <Private />
      </div>
      <div style={{width:"100%", height:"70px"}}></div>
     </div>
     );
}

export default Cs;
