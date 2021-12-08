import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid, ListItem, Container, List, Divider, Box, Typography } from '@mui/material';
class Pg3 extends Component {

    constructor(props){
        super(props);
        this.state = this.getDefaultState();
    }
    
    getDefaultState = () => {
        return { text1: '' };
    }
    
    clear = () => {
        this.setState(this.getDefaultState())
    }   

    submit = () => {
        // Here is where you insert the data into the database!
        this.setState(this.getDefaultState())
    } 

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
                                    <Typography>THIS IS WHERE THE COMMENT TABLE GOES</Typography>
                                <Divider light />
                                <ListItem>
                                    <TextField
                                        id='comment-box'
                                        label='Comment'
                                        multiline
                                        rows={4}
                                        style= {{ width: 720 }}
                                        defaultValue=""
                                        value={this.state.text1}
                                        onChange={(e)=>{this.setState({text1: e.target.value})}}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Button label="Submit" onClick={this.submit}>Submit</Button>
                                    <Divider orientation='vertical' variant='middle' flexItem />
                                    <Button label="Clear" onClick={this.clear}>Cancel</Button>
                                </ListItem>
                            </List>
                        </Container>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ bgcolor: '#ff9800', height: '100vh' }} />
                    </Grid>      
                </Grid>
            </Box>
        );
    }
}

export default Pg3;