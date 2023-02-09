import { createTheme } from '@material-ui/core/styles';
 
const arcBlue = '#052391';
const arcOrange = '#00E2F9';
const arcGrey ='#FFFFFF';
const arcBlack ='#000000';
 
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      black: arcBlack
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    },
    background: {
      main: arcBlack
    }
  },
  typography:{
      tab:{
        fontFamily:'Lato',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',
        color:'white'
      },
      estimate:{
        fontFamily:'Lato',
        fontSize:'1rem',
        textTransform:'none',
        color:'white'
      },
      h2:{
        fontFamily:'Lato',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcBlue,
        lineHeight:1.5
      },
      h3: {
        fontFamily: "Lato",
        fontSize: "2.5rem",
        color: arcBlue
      },
      h4:{
        fontFamily:'Poppins',
        fontSize:'1.75rem',
        color:arcBlue,
        fontWeight:700
      },
      subtitle1:{
        fontSize:'1.25rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color: arcGrey,
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue,
        borderRadius: 50,
        fontFamily: "Poppins",
        fontWeight: "bold"
      }
  },
  overrides :{
    MuiGrid:{
      root: {
      height: '100%',
      width: '100%',
      color: arcBlack
      }
    },

    MuiInputLabel:{
      root:{
        color:arcBlue,
        fontSize:'1rem'
      }
    },
    MuiInput:{
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});
