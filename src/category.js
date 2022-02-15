import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import View from './comp/view';

export default function Category({video,setVideo,categorize,filtered}) {
  return (
    <div className='category'>
    <Stack direction="row" spacing={2} marginTop="20px">
      {categorize.map((val,no)=>{
        return(
       <Button variant="contained" onClick={()=>filtered(val)} key={no} >{val}</Button>
        );
      })}
    </Stack>
    {/* <View setVideo={setVideo}/> */}
</div>
  );
}
