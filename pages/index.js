import React from 'react'
import Lottie from 'react-lottie'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
    Grid,
    Button,
    Typography,
    useMediaQuery,
    Card,
    CardContent
} from '@material-ui/core'

import CallToAction from '../src/ui/CallToAction'

import animationData from '../src/animations/landinganimation/data'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "40em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em",
            marginLeft: 0
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        height: 45,
        width: 145,
        fontSize: "0.9rem",
        padding: 5
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down('md')]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        }
    },
    serviceContainer: {
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
            padding: "2em"
        }
    },
    revolutionBackground: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        maxWidth: "50em",
        height: "7em",
        [theme.breakpoints.down("sm")]: {
            padding: "8em 0",
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url("/assets/infoBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))


export default function LandingPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const { setValue, setMenuItemSelected } = props

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item > {/*hero  block*/}
                <Grid container justify={matchesSM ? "center" : "flex-end"} alignItems="center">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">
                            Bring West Coast Technology
                            <br />
                            to the Midwest
                            </Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained" component={Link} href="/estimate" onClick={() => setValue(5)}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero} component={Link} href="/revolution" onClick={() => setValue(2)}>Learn more</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation} >
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
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
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/customsoftware" onClick={() => { setValue(1); setMenuItemSelected(1) }}>Learn more</Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt="custom software icon" src="/assets/customSoftware.svg" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
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
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/mobileapp" onClick={() => { setValue(1); setMenuItemSelected(2) }}>Learn more</Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="mobile icon" src="/assets/mobileIcon.svg" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/websites" onClick={() => { setValue(1); setMenuItemSelected(3) }}>Learn more</Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt="Website icon" src="/assets/websiteIcon.svg" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justify="center" style={{ height: "50em", marginTop: "5em" }}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography gutterBottom variant="h3">
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" className={classes.learnButton} component={Link} href="/revolution" onClick={() => setValue(2)}>Learn more</Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container style={{ height: "40em" }} alignItems="center" className={classes.infoBackground}>
                    <Grid item container

                        style={{ textAlign: matchesXS ? "center" : undefined }}
                        direction={matchesSM ? "column" : "row"}
                    >
                        <Grid sm item style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }} >
                            <Grid container style={{ marginBottom: matchesXS ? "10em" : 0 }} direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>About us</Typography>
                                <Typography variant="subtitle2">Let's get personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{ color: "white", borderColor: "white" }} component={Link} href="/about" onClick={() => setValue(3)}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }} >Contact us</Typography>
                                <Typography variant="subtitle2">Say Hello!</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{ color: "white", borderColor: "white" }} component={Link} href="/contact" onClick={() => setValue(4)}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}