import * as React from 'react';
import { useNavigate } from 'react-router';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function Footer() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <BottomNavigation sx={{ flexGrow:1, position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Folder" value="folder"size="large" icon={<FolderIcon />} onClick={()=>{
          navigate("/edit");
        }}/>
      <BottomNavigationAction
        label="Settings"
        value="settings"
        size="large"
        onClick={()=>{
          navigate("/cs");
        }}
        icon={<SettingsIcon />}
      />
      <BottomNavigationAction
        label="Home"
        value="Home"
        size="large"
        onClick={()=>{
          navigate("/home");
        }}
        icon={<HomeIcon/>}
      />
      <BottomNavigationAction
        label="Add"
        value="add"
        size="large"
        onClick={()=>{
          navigate("/new");
        }}
        icon={<PlaylistAddIcon />}
      />
    </BottomNavigation>
  );
}
