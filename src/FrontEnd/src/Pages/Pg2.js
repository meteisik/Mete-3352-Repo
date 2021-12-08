import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


import StarIcon from '@mui/icons-material/Star';
export default function Home() {
   


//the elements in the return are the views, any functions outside of  the return are the models

  return (
    
    <Box >

      <Grid container spacing={1}>


        <Grid item xs={0.8  } > 
            <Box sx={{ height: '100vh' }} />
        </Grid>

      <Grid item xs={11}>
     
        <Box >
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>

        <Grid item xs={12}>

        <ListItem>
          <Button align='right' variant='contained' href='/Pg1'>Back</Button> 
        </ListItem>

        <Box sx={{ border: 1, borderColor: 'grey.500', width: 1305,height: 200 }}>
        <Grid item xs={0.7  } > 
            <Box sx={{ height: '5vh' }} />
            
        </Grid>
        
        <Typography xs={12} variant="h5" sx={{ textAlign: 'center' }}>Week 3: Requirements Elicitation & Analysis</Typography>
        <Grid item xs={0.7  } > 
            <Box sx={{ height: '3vh' }} />
        </Grid>
        <Box sx={{ bgcolor: '#ffb851', height: '7vh' }} >


      <List>
      

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Live Session" />
        </ListItemButton>
      </ListItem>

      </List>

        </Box>

        <Grid item xs={0.7 } > 
            <Box sx={{ height: '1vh' }} />
        </Grid>
        <List>

<ListItem disablePadding>
  <ListItemButton>
    <ListItemText primary="Week3: Live Session" />
  </ListItemButton>
</ListItem>
</List>

        </Box>
        </Grid>
        <Grid item xs={6}>

<List>


        <ListItem >
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>LEFT 1</Typography>
        <Button style={{ width: 279}} href='https://youtu.be/7ZT0fsEPKwc'>Click Here to view video 1 </Button>
        </Box>
     
        </ListItem>

        <ListItem >
         
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>LEFT 2</Typography>
        <Button style={{ width: 279}} href='https://youtu.be/k-mdPAvXgOI'>Click Here to view video 2</Button>
        </Box>

        </ListItem>

        <ListItem >
         
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Comments</Typography>
        <Button style={{ width: 279}} component={Link} to= "/Pg3">Click Here to go to comments</Button>
        </Box>
        </ListItem>

  
</List>


        </Grid>
        <Grid item xs={6}>

          
        <List>


        <ListItem >

        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Right 2</Typography>
        <Button style={{ width: 279}} href='https://owl.uwo.ca/access/lessonbuilder/item/184399708/group/1f1aeaad-8d4c-4a5a-8278-c10ac654d774/06-RequirementsElicitation.pdf'>Click Here to view PDF content 2</Button>
        </Box>
     
        </ListItem>

        <ListItem >
         
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Right 2</Typography>
        <Button style={{ width: 279}} href='https://owl.uwo.ca/access/lessonbuilder/item/184399699/group/1f1aeaad-8d4c-4a5a-8278-c10ac654d774/06-SE2203b_DrOudasAnalysisPPT.pdf'>Click Here to view PDF content 2</Button>
        </Box>

      
        </ListItem>

        <ListItem >
         
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 300 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Right3</Typography>
        <Button style={{ width: 279}} component={Link} to= "/Pg3">Click Here to go to comments</Button>
        </Box>
        </ListItem>

  
</List>
        </Grid>
        </Grid>
        </Box>
      </Grid>

      <Grid item xs={1}>
          <Box sx={{ height: '100vh' }} />
        </Grid>

      </Grid>
    </Box>
  );
}