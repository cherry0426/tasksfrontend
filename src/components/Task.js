import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default function Task() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25pc' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField id="standard-basic" label="Add Task" variant="outlined" fullwidth/>
      <TextField id="date" label="" type='datetime-local' variant="outlined"/>
    </div>
      <Button color="primary" variant="contained" endIcon={<SendIcon />}>
        Add
     </Button>
    </Box>
  );
}
