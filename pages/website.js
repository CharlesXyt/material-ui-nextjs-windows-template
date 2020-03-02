import React from 'react'
import Link from '../src/Link'
import Head from 'next/head'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    useMediaQuery,
    IconButton,
    Hidden
} from '@material-ui/core'

import CallToAction from '../src/ui/CallToAction'

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        padding: "0em 5em 0em 5em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1.5em 0em 1.5em",
        }
    },
    paragraphContainer: {
        maxWidth: "25em"
    }

}))

export default function WebsiteDevelopment(props) {

    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const { setValue, setSelectedIndex } = props

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Stunning Custome Website Design | Arc Development</title>
                <meta name="description" key="description" content="Completely custom designed and built fron scratch to be blazing fast. Optimized code. server-side rendering, and perfect responsive design | 99% PageSpeed Score"/>
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Website" key="og:title"/>
                <meta property="og:url" key="og:url" content="material-ui-charles.herokuapp.com/website"/>
                <link rel="canonical" key="canonical" href="material-ui-charles.herokuapp.com/website"/>
            </Head>
            <Grid item container justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{ marginTop: matchesXS ? "1em" : "2em" }}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/mobileapp" onClick={() => setSelectedIndex(2)}>
                            <img src="/assets/backArrow.svg" alt="back to services page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h1" align={matchesMD ? "center" : "inherit"}>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "inherit"}>
                            Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "inherit"}>
                            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/services" onClick={() => setSelectedIndex(0)}>
                            <img src="/assets/forwardArrow.svg" alt="forward to andriod page" />
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid>
            <Grid item container className={classes.rowContainer} alignItems="center" direction={matchesSM ? "column" : "row"} style={{ marginTop: "15em" }}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/analytics.svg" alt="analytics" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >It’s no secret that people like to shop online.</Typography>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.</Typography>
                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} justify="flex-end" alignItems="center" direction={matchesSM ? "column" : "row"} style={{ marginTop: "15em", marginBottom: "15em" }}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/ecommerce.svg" alt="ecommerce" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.</Typography>

                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} alignItems="center" direction={matchesSM ? "column" : "row"} style={{ marginBottom: "15em" }}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/outreach.svg" alt="outreach" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.</Typography>

                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} justify="flex-end" alignItems="center" direction={matchesSM ? "column" : "row"} style={{ marginBottom: "15em" }}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Search Engine <br />Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/seo.svg" alt="ecommerce" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >How often have you ever been to the second page of Google results?</Typography>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >If you’re like us, probably never.</Typography>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph >Customers don’t go there either, so we make sure your website is designed to end up on top.</Typography>
                </Grid>
            </Grid>


            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}