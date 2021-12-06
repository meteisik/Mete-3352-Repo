import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import './Pg3.css';
class Pg3 extends Component {

    render() {
        return (
            <div className='comment-section'>
                <h1>
                    Comment Section
                </h1>
                <div className='all-comments'>
                    {/* All past comments updated through DB */}
                </div>
                <div className='comment-box'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Comment"
                        multiline
                        rows={4}
                        style= {{ width: 720 }}
                        defaultValue=""
                    />
                </div>
                <div className='buttons'>
                    <div className='cancel'>
                        <Button>Cancel</Button>
                    </div>
                    <div className='submit'>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pg3;