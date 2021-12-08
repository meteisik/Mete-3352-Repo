import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid, ListItem, Container, List, Divider, Box, Typography } from '@mui/material';
class Pg3 extends Component {

    render() {
        return (
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={0.5} > 
                        <Box sx={{ bgcolor: '#bbdefb', height: '100vh' }} />
                    </Grid>
                    <Grid item xs={11}>
                        <Container >
                            <List>
                                <ListItem >
                                    <Button align='right' variant='contained'>Back</Button>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='h2'>Comment Section</Typography>
                                </ListItem>
                                <Divider light />
                                <ListItem>
                                    <TextField
                                        id='outlined-multiline-static'
                                        label='Comment'
                                        multiline
                                        rows={4}
                                        style= {{ width: 720 }}
                                        defaultValue=""
                                    />
                                </ListItem>
                                <ListItem>
                                    <Button>Submit</Button>
                                    <Divider orientation='vertical' variant='middle' flexItem />
                                    <Button>Cancel</Button>
                                </ListItem>
                            </List>
                        </Container>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ bgcolor: '#ff9800', height: '100vh' }} />
                    </Grid>      
                </Grid>
            </Box>
        )
    }
}

export default Pg3;