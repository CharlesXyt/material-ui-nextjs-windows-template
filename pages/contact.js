import React, { useState } from 'react'
import Link from '../src/Link'
import Head from 'next/head'
import axios from 'axios'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    useMediaQuery,
    Button,
    TextField,
    Dialog,
    DialogContent,
    CircularProgress,
    Snackbar
} from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url("/assets/background.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url("/assets/mobileBackground.jpg")`,
            backgroundAttachment: "inherit"
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        marginLeft: "2em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em",
            marginLeft: "0em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 80,
        width: 205,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            marginLeft: 0
        }
    },
    message: {
        marginTop: "5em",
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function Contact(props) {

    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const { setValue } = props

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')

    const [phone, setPhone] = useState('')
    const [phoneHelper, setPhoneHelper] = useState('')

    const [message, setMessage] = useState('')

    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" })

    const onChange = event => {
        let valid;
        switch (event.target.id) {
            case "email":
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if (!valid) {
                    setEmailHelper("Invalid email")
                } else {
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if (!valid) {
                    setPhoneHelper("Invalid phone")
                } else {
                    setPhoneHelper("")
                }
                break;
            default:
                break

        }
    }

    const onConfirm = () => {
        setLoading(true)
        axios.get('https://us-central1-astute-sky-251305.cloudfunctions.net/sendMail', {
            params: {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        })
            .then(res => {
                console.log(res)
                setLoading(false)
                setOpen(false)
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
                setAlert({
                    open: true,
                    message: "message successfully",
                    backgroundColor: "#4BB543"
                })
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setAlert({
                    open: true,
                    message: "Something went wrong, please try again",
                    backgroundColor: "#FF3232"
                })
            })
    }

    const buttonContents = (
        <React.Fragment>
            Send Message
            <img src="/assets/send.svg" alt="airplane" style={{ marginLeft: "1em" }} />
        </React.Fragment>
    )

    return (
        <Grid container>
            <Head>
                <title key="title">Contact Us - | Arc Development</title>
                <meta name="description" key="description" content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"/>
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Contact us" key="og:title"/>
                <meta property="og:url" key="og:url" content="arc.com/contact"/>
                <link rel="canonical" key="canonical" href="arc.com/contact"/>
            </Head>

            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3} style={{ marginBottom: matchesSM ? "1em" : matchesMD ? "5em" : 0, marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0 }}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h1" style={{ lineHeight: 1 }} align={matchesMD ? "center" : undefined}>Contact Us</Typography>
                            <Typography variant="body1" style={{ color: theme.palette.common.blue }} align={matchesMD ? "center" : undefined}>We're waiting</Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src="/assets/phone.svg" alt="phone" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1em" }}>
                                    <a href="tel:5555555555" style={{ textDecoration: "none", color: "inherit" }}>(555) 555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src="/assets/email.svg" alt="email" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1em" }}>
                                    <a href="mailto:charles.yitong@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>charles.yitong@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ width: matchesSM ? "100%" : "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Email" id="email" error={emailHelper.length !== 0} helperText={emailHelper} value={email} onChange={onChange} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Phone" id="phone" error={phoneHelper.length !== 0} value={phone} helperText={phoneHelper} onChange={onChange} />
                            </Grid>
                        </Grid>
                        <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                id="message"
                                multiline rows={10}
                                fullWidth
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                className={classes.message}
                                placeholder="Tell us more about your project"
                            />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                            <Button
                                variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                                onClick={() => setOpen(true)}>
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                style={{ zIndex: 1303 }}
                fullScreen={matchesSM}
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ style: { padding: matchesXS ? "1em 0" : matchesSM ? "5em 5em" : matchesMD ? "5em 15em" : "5em 25em" } }}
            >
                <DialogContent>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>Confirm Message</Typography>
                        </Grid>
                        <Grid item container direction="column" style={{ width: matchesSM ? "100%" : "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Email" id="email" error={emailHelper.length !== 0} helperText={emailHelper} value={email} onChange={onChange} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Phone" id="phone" error={phoneHelper.length !== 0} value={phone} helperText={phoneHelper} onChange={onChange} />
                            </Grid>
                        </Grid>
                        <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                id="message"
                                multiline rows={10}
                                fullWidth
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                className={classes.message}
                                placeholder="Tell us more about your project"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container style={{ marginTop: "2em" }} direction={matchesSM ? "column" : "row"} alignItems="center">
                        <Grid item>
                            <Button color="primary" onClick={() => setOpen(false)} style={{ fontWeight: 300 }}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                                onClick={onConfirm}
                            >
                                {loading ? <CircularProgress size={30} /> : buttonContents}
                            </Button>
                        </Grid>


                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{
                    style: { backgroundColor: alert.backgroundColor }
                }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClick={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000}
            />
            <Grid item container lg={8} xl={9} className={classes.background} direction={matchesMD ? "column" : "row"} justify={matchesMD ? "center" : undefined} alignItems="center">
                <Grid item
                    style={{
                        marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"
                    }}>
                    <Grid container direction="column">
                        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                            Simple Software.<br />Revolutionary Results
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }} align={matchesMD ? "center" : undefined}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container item justify={matchesMD ? "center" : undefined}>
                            <Button variant="outlined" className={classes.learnButton} component={Link} href="/estimate" onClick={() => setValue(2)}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.estimateButton} component={Link} href="/estimate" onClick={() => setValue(5)}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}