import React from 'react'
import Link from '../Link'

import {makeStyles} from '@material-ui/styles'
import {
    Grid,
    Hidden
} from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor:theme.palette.common.blue,
        width:"100%",
        position:"relative",
        zIndex:1302
    },
    adornment:{
        width:"25em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:{
            width:"21em",
        },
        [theme.breakpoints.down("xs")]:{
            width:"15em",
        }   
    },
    mainContainer:{
        position:"absolute"
    },
    link:{
        color:"white",
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
        textDecoration:'none'
    },
    gridItem:{
        margin:"3em"
    },
    icon:{
        height:"4em",
        width:"4em",
        [theme.breakpoints.down("md")]:{
            height:"2.5em",
            width:"2.5em",
        }
    },
    socialContainer:{
        position:"absolute",
        marginTop:"-6rem",
        right:"1.5em",
        [theme.breakpoints.down("md")]:{
            marginTop:"-4rem",
            right:"0.6em"
        }
    }
}))


export default function Footer(props){

    const classes = useStyles()
    const {setValue,setMenuItemSelected} = props

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} href="/" className={classes.link} onClick={() =>{setValue(0);} }>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} href="/services" className={classes.link} onClick={() =>{setValue(1); setMenuItemSelected(0);} }>Services</Grid>
                            <Grid item component={Link} href="/customsoftware" className={classes.link} onClick={() =>{setValue(1); setMenuItemSelected(1);} }>Custom Software Development</Grid>
                            <Grid item component={Link} href="/mobileapp" className={classes.link} onClick={() =>{setValue(1); setMenuItemSelected(2); } }>IOS/Android App Development</Grid>
                            <Grid item component={Link} href="/websites" className={classes.link} onClick={() =>{setValue(1); setMenuItemSelected(3);} }>Website Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} href="/revolution" className={classes.link} onClick={() =>{setValue(2);} }>The Revolution</Grid>
                            <Grid item component={Link} href="/revolution" className={classes.link} onClick={() =>{setValue(2);} }>Vision</Grid>
                            <Grid item component={Link} href="/revolution" className={classes.link} onClick={() =>{setValue(2);} }>Technology</Grid>
                            <Grid item component={Link} href="/revolution" className={classes.link} onClick={() =>{setValue(2);} }>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} href="/about" className={classes.link} onClick={() =>{setValue(3);} }>Abouts</Grid>
                            <Grid item component={Link} href="/about" className={classes.link} onClick={() =>{setValue(3);} }>History</Grid>
                            <Grid item component={Link} href="/about" className={classes.link} onClick={() =>{setValue(3);} }>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} href="/contact" className={classes.link} onClick={() =>{setValue(4);} }>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decorative slash" src="/assets/footerAdornment.svg" className={classes.adornment}/>
            <Grid container justify="flex-end" className={classes.socialContainer} spacing={2}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo"  className={classes.icon} src="/assets/facebook.svg"/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo"  className={classes.icon} src="/assets/twitter.svg"/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" className={classes.icon}  src="/assets/instagram.svg"/>
                </Grid>
            </Grid>
        </footer>
    )
}