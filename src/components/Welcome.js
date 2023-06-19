import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db,auth } from "../firebase";import { makeStyles, Grid, Typography,useMediaQuery,useTheme ,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme=>({
    rowContainer:{
        paddingLeft:'5em',
        paddingRight:'5em',
      
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'1.5em',
            paddingRight:'1.5em'
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        backgroundColor:theme.palette.common.orange,
        height:45,
        width:200,
        // marginRight:40,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    },

}))
export default function Welcome() {
    const classes = useStyles();

    let location = useLocation();
var user = auth.currentUser;
console.log(user)
const [name,setName] = useState(user.displayName);

const [email,setEmail] = useState(user.email);
    return (
     
        <div><h1>Welcome {user.displayName}</h1>
        <Button variant='contained' className={classes.estimateButton}  
                                component={Link} to='/account'
                                style={{color:'white'}}
                                onClick = {()=>{
                              
                                }}
                        >
                        Create New Account
                        </Button> 
        </div>
    );
}