import React from 'react';
import {TextField} from "@mui/material";

function InputNumber({text , state  , setState}) {
     const inputProps = {
       step: 0.01
     }
    return (
        <>
            <TextField
                sx={{minWidth : "48%"}}
                id="standard-number"
                label={text}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={inputProps}
                variant="standard"
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
            />
        </>
    );
}

export default InputNumber;