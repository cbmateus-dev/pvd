import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

export default function DropDownInput(style) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className='list'
      sx={{ width: '100%', maxWidth: 250, maxHeight: 61, border: '1px solid #aabacf ',  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

      <ListItemButton onClick={handleClick}>
        <ListItemText primary="F12 - MENU FISCAL" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open} timeout="auto" unmountOnExit className='list'>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3, border: '1px solid #aabacf ', bgcolor: '#d4cfcf' }} >
            <ListItemText primary="Starred" />

          </ListItemButton>
          <Divider />
          <ListItemButton sx={{ pl: 3, border: '1px solid #aabacf ',bgcolor: '#d4cfcf' }} >
            <ListItemText primary="Starred" />

          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
