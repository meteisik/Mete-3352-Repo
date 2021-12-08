import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid, ListItem, Container, List, Divider, Box, Typography } from '@mui/material';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
class Pg3 extends Component {


    constructor(props){
        super(props);
        this.state = this.getDefaultState();
        this.state=({apiResponse:[]})


    }

    getDefaultState = () => {
        return { text1: '' };
    }
    
    clear = () => {
        this.setState(this.getDefaultState())
    }   

    submit = () => {
        let helpMe=this.state.text1;
        let names2='xXx420_69_XBOXLIVE_GAMERxXx'
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({names2, helpMe})
        }
        fetch("http://localhost:9000/TestAPI/toJSON",requestOptions)
            .then(res => res.text());


    }

    onLoad=() =>{

        fetch("http://localhost:9000/TestAPI/fromJSON")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: JSON.parse(res)}));





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
                                <Button label="Submit" onClick={this.onLoad}>Retrieve Comments</Button>
                                <TableContainer component={Paper}>
                                    <Table sx={{minWidth: 650}} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>

                                                <TableCell align="right">Name</TableCell>
                                                <TableCell align="right">Comment</TableCell>

                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {this.state.apiResponse.map((row, i) => (
                                                    <TableRow
                                                        key={i}
                                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {this.state.apiResponse[i].name}
                                                        </TableCell>
                                                        <TableCell align="right">{this.state.apiResponse[i].comment}</TableCell>

                                                    </TableRow>
                                                )
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
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