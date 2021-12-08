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

//THIS PAGE IS BUILT ON THE DESIGN INSPIRED BY THE OWL WEBSITE, SKELETON VERSION WITH 2 ACTIVE PAGE BUTTONS, COURSE CONTENT AND OVERVIEW
import StarIcon from '@mui/icons-material/Star';
export default function Home() {
   




  return (
    
    <Box >

      <Grid container spacing={1}>


        <Grid item xs={0.8  } > 
            <Box sx={{ height: '100vh' }} />
        </Grid>

      <Grid item xs={11}>
     
    <Box >
        


    <ListItem> 
      <Box sx={{  width: 1200,height: 4 }}>
      <Grid item xs={12} > 
            
            <Typography variant='h5'>Overview</Typography>{/**BASIC TITLE */}

      </Grid>
      </Box>
</ListItem>

  
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>



        <Grid item xs={6}>

<List>

        <ListItem >
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 600 }}>
        <Typography variant="h6" > Welcome to SE3352: Software Requirements and Analysis</Typography>{/**BASIC welcome box*/}
        <Typography variant="h7" > Please see the tentative course plan on the "Course Contents" Page.</Typography>
       <Typography>The course outlines document is available under the 'Syllabus' tab.</Typography>
        </Box>
     
        </ListItem>

        
  
</List>


        </Grid>
        <Grid item xs={6}>

          
        <List>


        <ListItem >

        <ListItem >
        <Box sx={{ border: 1, borderColor: 'grey.500', width: 600,height: 600 }}>
        <Typography variant="h6" > Annoucements</Typography>
        <Typography variant="h7" > Please see the tentative course plan on the "Course Contents" Page.</Typography>
       <Typography>The course outlines document is available under the 'Syllabus' tab.</Typography>
        </Box>
     
        </ListItem>
     
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