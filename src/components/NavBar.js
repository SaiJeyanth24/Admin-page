import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "3%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "10%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },

    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
       <pre>
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                {/* <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Requests
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Category
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Dress 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Feedback 
                </Typography> */}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <CustomBtn txt="Logout"/>
            </Toolbar>
            </pre>
    )
}

export default NavBar