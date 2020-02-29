import React from 'react'
import Link from '../Link'
import {
    Grid,
    Typography,
    Button,
    useMediaQuery
} from '@material-ui/core'
import {
    makeStyles,useTheme
} from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        marginLeft:"2em",
        [theme.breakpoints.down('sm')]:{
            marginBottom:"2em"
        }
    },
    background:{
        backgroundImage:`url("/assets/background.jpg")`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"40em",
        width:"100%",
        backgroundAttachment:"fixed",
        [theme.breakpoints.down("md")]:{
            backgroundImage:`url("/assets/mobileBackground.jpg")`,
            backgroundAttachment:"inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height:80,
        width:205,
        fontSize:"1.5rem",
        marginRight:"5em",
        marginLeft:"2em",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            marginRight:0,
            marginLeft:0
        }
    },
}))

export default function CallToAction(props){
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const {setValue} = props
    return (
        <Grid container  alignItems="center" justify={matchesSM ? "center":"space-between"} className={classes.background}
        direction={matchesSM ? "column":"row"} 
        >
            <Grid item 
            style={{
                marginLeft:matchesSM ? 0 :"5em",textAlign:matchesSM ? "center":"inherit"
                }}>
                <Grid container direction="column">
                    <Typography variant="h2">
                        Simple Software.<br/>Revolutionary Results
                    </Typography>
                    <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                        Take advantage of the 21st Century.
                    </Typography>
                    <Grid container item justify={matchesSM ? "center":undefined}>
                        <Button variant="outlined" className={classes.learnButton}  component={Link} href="/estimate" onClick={() => setValue(2)}>Learn more</Button>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.estimateButton} component={Link} href="/estimate" onClick={() => setValue(5)}>Free Estimate</Button>
            </Grid>
            
        </Grid>
    )
}