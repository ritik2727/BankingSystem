import React from 'react';
import { makeStyles, Grid, Typography,useMediaQuery,useTheme ,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import apexLogo from "../assests/ApexFin-Logo-Reverse.svg";


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

export default function LandingPage(props){
    const classes = useStyles();

    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    // const techOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: technologyAnimation,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    // }


    return(
        <body style={{backgroundColor: 'black'}}>
        <Grid container direction='column'  >
            <Grid item className={classes.rowContainer} style={{marginTop:'1em'}}>
                <Typography 
                    variant='h2' 
                    style={{fontFamily:'Sans Serif' }}
                    align={matchesMD ? 'center' : undefined}
                >
                     Welcome to Apex Fintech Solutions
                </Typography>
            </Grid>
            <Grid 
                item 
                container 
                direction={matchesMD ? 'column' : 'row' }
                className={classes.rowContainer}
                alignItems='center'
                style={{marginTop:' 2em',marginBottom:'1.7em'}}
            >
                <Grid item lg>
                    <img 
                        src = {apexLogo}
                        alt='mountain' 
                        style={{maxWidth:matchesSM ? 600 :'40em',
                                marginRight:matchesMD ? 0 : '5em',
                                marginBottom:matchesMD ? '5em' :0
                            }} 
                    />
                </Grid>

                <Grid item container direction='column' lg style={{maxWidth:'40em'}}>
                    <Grid item>
                        <Typography variant='h4' style={{textAlign:'center'}} gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                        Fueling the Relentless Fintech Revolution
                        </Typography>
                    </Grid>
                    <Grid item>
    
                    <Grid item align='center' style={{marginBottom:'3em'}}>
                        <Button variant='contained' className={classes.estimateButton}  
                                component={Link} to='/create'
                                style={{color:'white'}}
                                onClick = {()=>{
                                    props.setValue(3)
                                }}
                        >
                        Create New Account
                        </Button>
                    </Grid>
                    <Grid item align='center' style={{marginBottom:'3em'}}>
                        <Button variant='contained' className={classes.estimateButton}  
                                component={Link} to='/create'
                                style={{color:'white'}}
                                onClick = {()=>{
                                    props.setValue(3)
                                }}
                        >
                        Log In
                        </Button>
                    </Grid>

                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid 
                item 
                container 
                direction= 'row' 
                justifyContent='center'
                style={{marginTop:'10em' ,marginBottom:'10em'}}
                className={classes.rowContainer}
            >
                <Grid   item 
                        container 
                        direction='column' 
                        md 
                        style={{maxWidth:'40em'}} 
                        alignItems='center'
                >
                    <Grid item>
                        <img src='https://image.flaticon.com/icons/png/128/181/181096.png' alt='lightbulb' />
                    </Grid>
                </Grid>
                <Grid item container 
                        direction='column' 
                        md 
                        alignItems='center'
                        style={{
                            maxWidth:'40em',
                            marginBottom:matchesSM ? '10em' : 0,
                            marginTop:matchesSM ? '10em' : 0
                        }} 
                >
                    <Grid item>
                        <img src='https://image.flaticon.com/icons/png/128/181/181095.png' alt='stopwatch' />
                    </Grid>
                </Grid>
                <Grid item container 
                        direction='column' 
                        md 
                        style={{maxWidth:'40em'}} 
                        alignItems='center'
                >
                    <Grid item>
                        <img src='https://image.flaticon.com/icons/png/128/181/181093.png' alt='cash' />
                    </Grid>
                </Grid>
            </Grid> */}

        </Grid>
        </body>
    )

}