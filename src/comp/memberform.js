import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export default function MemberForm() {
  const [name, setName] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [btd, setBtd] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit=()=>{
    
  }
 const handleReset=()=>{
   setName("");
   setPw("");
   setBtd("");
   setEmail("");
 }
  return (
    <div style={{height:"630px"}}>
      <Paper elevation={3} style={{width:"60%",height:"510px",padding:"20px 40px", margin:"25px auto",textAlign:"left"}}>
      <FormControl variant="standard" fullWidth>
        <h4>ID</h4>
      <TextField
          label="아이디"
          // id="standard-size-normal"
          color="primary"
          variant="standard"
          value={name}
          onChange={(e)=>{setName(e.target.value)}} 
        />
      </FormControl><br/>
      <h4>비밀번호</h4>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-simple"></InputLabel>
        <Input type="password" id="component-simple" value={pw} onChange={(e)=>{setPw(e.target.value)}} />
      </FormControl><br/>
      <h4>생년월일</h4>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-simple"></InputLabel>
        <Input type="text" id="component-simple" value={btd} onChange={(e)=>{setBtd(e.target.value)}} />
      </FormControl><br/>
      <h4>E-mail</h4>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-simple"></InputLabel>
        <Input type="email" id="component-simple" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </FormControl><br/>
      <div style={{width:"100%",margin:"20px 0" ,display:"flex",justifyContent:"space-between"}}>
      <Button style={{width:"50%", padding:"10px 0"}} variant="outlined" onClick={handleReset} >취소</Button>
      <Button style={{width:"50%", padding:"10px 0"}}variant="contained" onClick={handleSubmit}>회원가입</Button>
      </div>
      </Paper>

    </div>
  );
}
