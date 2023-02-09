import { Button, Grid, useTheme, useMediaQuery, makeStyles, Typography, TextField, CircularProgress, Snackbar } from '@material-ui/core';
import e from 'cors';
import React, { useState } from 'react';
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        marginBottom: '3em',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
    }
}));


export default function CreateUser() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));




    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [DOB, setDOB] = useState('');
    const [DOBHelper, setDOBHelper] = useState(''); 

    const [homeAddress, setHomeAddress] = useState('');
    const [homeAddressddressHelper, setHomeAddressHelper] = useState('');

    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine2Helper, setAddressLine2Helper] = useState('');

    const [city, setCity] = useState('');
    const [cityHelper, setCityHelper] = useState('');

    const [province, setProvince] = useState('');
    const [provinceHelper, setProvinceHelper] = useState('');

    const [postcode, setPostcode] = useState('');
    const [postcodeHelper, setPostcodeHelper] = useState('');

    const [password, setPassword] = useState('');
    const [passwordHelper, setPasswordHelper] = useState('');


    const [phoneHelper, setPhoneHelper] = useState('');

    const [amount, setAmount] = useState(0)

    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({ open: false, color: "" });
    const [alertMessage, setAlertMesssage] = useState("");

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount);
        }
    }

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if (!valid) {
                    setEmailHelper('Invaild email');
                } else {
                    setEmailHelper('');
                }
                break;

            case 'phone':
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if (!valid) {
                    setPhoneHelper('Invalid phone')
                } else {
                    setPhoneHelper('')
                }
                break;

            default:
                break;
        }
    }

    const buttonContents = (
        <React.Fragment>
            Submit
        </React.Fragment>
    );

    const Push = (e) => {
        e.preventDefault();
        setLoading(true);

        db.collection("users").add({
            name: name,
            email: email,
            phone: phone,
            DOB: DOB,
            homeAddress: homeAddress,
            addressLine2: addressLine2,
            city: city,
            province: province,
            postcode: postcode,

        }).then(() => {
            alert("Details have been saved")
            setLoading(false);
            setAlert({ open: true, color: "#4BB543" });
            setAlertMesssage("Customer Created Successfully !!");
            console.log("Document successfully written!");
        }).catch((error) => {
            alert(error.message)
            setLoading(false);
            setAlert({ open: true, color: "#FF3232" });
            setAlertMesssage("Something went wrong! Please try again.");
            console.error("Error writing document: ", error);
        });
        setName('');
        setDOB('');
        setEmail('');
        setPhone('');
        setHomeAddress('');
        setAddressLine2('');
        setCity('');
        setProvince('');
        setPostcode('');
    }

    return (
        <Grid
        container
        direction='column'
        justifyContent='center'
        style={{
            marginTop:matchesSM ? '4em'  : matchesMD ? '5em' : undefined,
            marginBottom: matchesMD ? '5em' : undefined
        }}
    >
        <Grid item style={{paddingBottom:50}}>
            <Grid item container direction='column' style={{alignItems:'center'}}>
                <Grid item>
                    <Typography
                        variant='h3'
                        align= 'center'
                        style={{lineHeight:1}}
                    >
                        Register
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction='column'
                    style={{maxWidth:matchesXS ? '20em' : matchesSM? '25em' :'40em'}}
                >
                <Grid item style={{marginTop:'2em' ,marginBottom:'0.5em'}}>
                    <Typography style={{color:'#FF0000', padding:10, fontSize:'0.9rem'}}>You must be over 18 and a legal resident of Canada to continue</Typography>
                    <TextField
                        id="name"
                        variant="outlined"
                        label="required"
                        required
                        placeholder="Name"
                        fullWidth
                        //error={senderEmailHelper.length !== 0}
                         //helperText={senderEmailHelper}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </Grid>
            
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>DOB</Typography>
                    <input type="date" id="start" name="trip-start"
                    value={DOB}
                    onChange={(e)=>setDOB(e.target.value)}
                    min="2002-00-00" max="40-12-31"></input>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                <Typography style={{color:theme.palette.common.blue}}>Home Address.</Typography>
                    <TextField
                        id="homeAddress"
                        variant="outlined"
                        fullWidth
                        //error={homeAddressHelper.length !== 0}
                        //helperText={homeAddressHelper}
                        value={homeAddress}
                        onChange={(e)=>setHomeAddress(e.target.value)}
                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>Address Line 2 </Typography>
                    <TextField
                        id="addressLine2"
                        variant="outlined"
                        fullWidth
                        //error={addressLine2Helper.length !== 0}
                        //helperText={addressLine2Helper}
                        value={addressLine2}
                        onChange={(e)=>setAddressLine2(e.target.value)}


                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>City</Typography>
                    <TextField
                        id="city"
                        variant="outlined"
                        fullWidth
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}


                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>Province</Typography>
                    <TextField
                        id="province"
                        variant="outlined"
                        fullWidth
                        value={province}
                        onChange={(e)=>setProvince(e.target.value)}

                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>Postcode</Typography>
                    <TextField
                        id="postcode"
                        variant="outlined"
                        fullWidth
                        value={postcode}
                        onChange={(e)=>setPostcode(e.target.value)}


                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                <Typography style={{color:theme.palette.common.blue}}>Phone Number.</Typography>
                    <TextField
                        id="phone"
                        variant="outlined"
                        fullWidth
                        error={phoneHelper.length !== 0}
                        helperText={phoneHelper}
                        value={phone}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue}}>Email Address</Typography>
                    <TextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </Grid>

                <Grid item container justifyContent='center' style={{marginTop:'2em'}}>
                    <Button
                        disabled={
                            name.length === 0 ||
                            email.length === 0 ||
                            phone.length === 0 ||
                            amount.length === 0 ||
                            emailHelper.length !== 0 ||
                            phoneHelper.length !== 0
                        }
                        variant='contained'
                        className={classes.sendButton}
                        onClick={Push}
                    >
                      {loading ? <CircularProgress size={30} /> : buttonContents}
                    </Button>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
    </Grid>
    )
};
