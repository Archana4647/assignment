import { Button, TextField, Typography, inputClasses, } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addblog = () => {
   var [inputs, setInputs]= useState({
        bname:"",
        description:"",
        authorname:""
    })
    const inputHandler =(b) =>{
        const{ name, value } = b.target
        setInputs((prevData) =>({...prevData,[name]: value}))
        console.log(inputs)
    }
    const addHandler =() =>{
        console.log("button clicked");
        axios.post("http://localhost:3000/add",inputs)
        .then ((response) =>{
            console.log(response.data)
            alert(response.data)
        })
        .catch((err) =>console.log(err))
    }
    


  return (
    


<div style={{paddingTop: "80px"}}>
            <Typography variant="h4">
                  Blog form
            </Typography>
            <br></br>
            <TextField label="blog name"
            variant='outlined'
            name='bname'
            value={inputs.bname}
            onChange={inputHandler}
            />
            <br></br>

            <TextField label="description"
            variant='outlined'
            name='bdes'
            value={inputs.bdes}
            onChange={inputHandler}
            />
            <br></br> 

<TextField label="author name"
            variant='outlined'
            name='baname'
            value={inputs.eposition}
            onChange={inputHandler}
            />
            <br></br>


            <Button variant="contained" color="secondary" onClick={addHandler}>submit</Button>


      
  <br></br>
    
    </div>
  )
}

export default Addblog