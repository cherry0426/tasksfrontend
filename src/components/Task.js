import React,{useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));


export default function Task() {
  const paperStyle = {padding:'50px 50px', width:600, margin:'10px auto'}
  const classes = useStyles();
  const[task_description,setName]=useState('')
  const[deadline,setDate]=useState('')
  const[tasks,setTasks]=useState([])
  const handleClick=(e)=>{
    e.preventDefault()
    const task={task_description  ,deadline}
    console.log(task)
    fetch("http://localhost:8080/activity/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(task)

  }).then(()=>{
    console.log("New Task added")
  })
  window.location.reload(); 
}

useEffect(()=>{
  fetch("http://localhost:8080/activity/add")
  .then(res=>res.json())
  .then((result)=>{
    setTasks(result);
  }
)
},[])


  return (

    <Container>
    <Paper elevation={3} style ={paperStyle}>  
     <form className={classes.root} noValidate autoComplete="off">

      <h1 style={{color:"blue"}}>Add Task</h1>
      <TextField id="standard-basic" label="Add Task" variant="outlined" fullWidth
      value={task_description}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="date" label="" type='datetime-local' variant="outlined" fullWidth
      value={deadline}
      onChange={(e)=>setDate(e.target.value)}/>
      <div>
      <Button color="primary" variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
        Add
     </Button> 
     </div>
     </form>
     {task_description}
    </Paper>

    <h1 style={{color:"blue"}}>Tasks</h1>
    <Paper elevation={3} style={paperStyle}>
      {tasks.map(task=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={task.id}>
         Task   :{task.task_description}<br/>
         Deadline :{task.deadline}
        </Paper>
      ))
}
    </Paper>
    </Container>
  );
}
