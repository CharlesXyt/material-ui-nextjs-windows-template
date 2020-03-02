import React from 'react'
import Link from '../src/Link'
import Head from 'next/head'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
    Grid,
    Button,
    Typography,
    useMediaQuery
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: "2em",
        width: "15em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            width: "8em"
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: "2em"
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    },
}))


export default function Services(props) {

    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const { setValue, setSelectedIndex } = props


    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Top Custom Software Development Services | Arc Development</title>
                <meta name="description" key="description" content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly"/>
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Services" key="og:title"/>
                <meta property="og:url" key="og:url" content="material-ui-charles.herokuapp.com/services"/>
                <link rel="canonical" key="canonical" href="material-ui-charles.herokuapp.com/services"/>
            </Head>
            <Grid item>
                <Typography variant="h1" gutterBottom style={{ marginLeft: matchesSM ? 0 : "2em", marginTop: matchesSM ? "1em" : "2em" }} align={matchesSM ? "center" : undefined}>
                    Services
                </Typography>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{ marginTop: matchesSM ? "1em" : "5em" }}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                        <Typography variant="h4">
                            IOS/Andriod App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integration your web experience or create a standalone{matchesSM ? null : <br />}
                            with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/mobileapp" onClick={() => { setValue(1); setSelectedIndex(2) }}>Learn more</Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="mobile icon" src="/assets/mobileIcon.svg" className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solution, from investigation to{" "}
                            <span className={classes.specialText}>
                                celebration
                            </span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/customsoftware" onClick={() => { setValue(1); setSelectedIndex(1) }}>Learn more</Button>
                    </Grid>
                    <Grid item >
                        <img alt="custom software icon" src="/assets/customSoftware.svg" className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>



            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{ marginBottom: "10em" }}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/websites" onClick={() => { setValue(1); setSelectedIndex(3) }}>Learn more</Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="Website icon" src="/assets/websiteIcon.svg" className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}