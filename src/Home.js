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
import Table from './Table'
import { sizing } from '@mui/system';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box     >
    <Table size = "small"/>
    </Box>
  </Paper>
);




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
   
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  




  return (


    
    <Box >
      <Typography>HELLO</Typography>
      <Grid container spacing={1}>


        <Grid item xs={0.5} > 
            <Box sx={{ bgcolor: '#bbdefb', height: '100vh' }} />
        </Grid>

        <Grid item xs={11}>
        <Container >
        <List>

        <ListItem >
         
        <Table  style={{ width: 500  }}  />
          
      </ListItem>

      <Divider light />

      <ListItem>
      <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Display Data"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
      </ListItem>

        </List>

      

      </Container>
        </Grid>



        


      </Grid>
    </Box>
  );
}