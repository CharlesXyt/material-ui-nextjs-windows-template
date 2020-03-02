import React,{useState,useEffect} from 'react'
import {makeStyles,useTheme} from '@material-ui/styles'
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem,
    SwipeableDrawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    useMediaQuery
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Link from '../Link'


function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]: {
            marginBottom:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom:"1.25em"
        }
      },
      logo:{
          height:"8em",
          [theme.breakpoints.down("md")]:{
              height:"7em"
          },
          [theme.breakpoints.down("xs")]:{
            height:"5.5em"
        }
      },
      tabContainer:{
          marginLeft:'auto'
      },
      tab:{
          ...theme.typography.tab,
          minWidth:10,
          marginLeft:"25px"

      },
      button:{
          ...theme.typography.estimate,
          borderRadius:"50px",
          marginLeft:"50px",
          marginRight:"25px",
          height:"45px",
          "&:hover":{
            backgroundColor:theme.palette.secondary.light,
            textDecoration:"none"
        }
      },
      logContainer:{
          padding:0,
          "&:hover":{
              backgroundColor:"transparent"
          }
      },
      menu:{
          backgroundColor:theme.palette.common.blue,
          color:"white"
      },
      menuItem:{
          ...theme.typography.tab,
          opacity:0.7,
          "&:hover":{
            opacity:1,
            textDecoration:"none"
          }
      },
      drawerIconContainer:{
          marginLeft:'auto',
          "&:hover":{
              backgroundColor:"transparent"
          }
      },
      drawerIcon:{
          width:"50px",
          height:"50px"
      },
      drawer:{
          backgroundColor:theme.palette.common.blue
      },
      drawerItem:{
          ...theme.typography.tab,
          color:"white",
          opacity:0.7
      },
      drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
      },
      drawerItemSelectedStyle:{
        opacity:1
      },
      appBar:{
          zIndex: theme.zIndex.modal + 1
      }
  }))


export default function Header(props){

    const {value,setValue,selectedIndex,setSelectedIndex} = props
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [anchorEl,setAnchorEl] = useState(null)
    const [openMenu,setOpenMenu] = useState(false)

    const [openDrawer,setOpenDrawer] = useState(false)
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const menuItem = [
        {name:"Services",link:"/services",activeIndex:1,selectedIndex:0},
        {name:"Custom Software Developement",link:"/customsoftware",activeIndex:1,selectedIndex:1},
        {name:"IOS/Android App Developement",link:"/mobileapp",activeIndex:1,selectedIndex:2},
        {name:"Website App Software Developement",link:"/website",activeIndex:1,selectedIndex:3}
    ]

    const routes = [
        {name:"Home",link:"/",activeIndex:0},
        {name:"Services",link:"/services",activeIndex:1,ariaOwns:anchorEl ? "simple-menu" : undefined,
            ariaHaspopup:anchorEl ? "true" : undefined,onMouseOver: (event) => handleClick(event)},
        {name:"The Revolution",link:"/revolution",activeIndex:2},
        {name:"About us",link:"/about",activeIndex:3},
        {name:"Contact us",link:"/contact",activeIndex:4},
    ]


    useEffect(()=>{
        [...menuItem,...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(value !== route.activeIndex){
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    if(value !== 5){
                        setValue(5)
                    }
                    break;
                default:
                    break;
            }
        })
    },[value,selectedIndex,menuItem,routes,setValue,setSelectedIndex])

    const handleChange = (event,valuePassed) => {
        setValue(valuePassed)
        setSelectedIndex(-1)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (event) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    
    const handleMenuItemClick = (event,index) => {
        handleClose();
        setValue(1);
        setSelectedIndex(index)
    }

    const tabs = (
        <React.Fragment>
            <Tabs value={value === 5 ? false : value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                {routes.map((item,index)=>(
                    <Tab 
                        key={"tab "+index}
                        className={classes.tab} 
                        component={Link} 
                        href={item.link} 
                        label={item.name} 
                        aria-owns={item.ariaOwns} 
                        aria-haspopup={item.ariaHaspopup} 
                        onMouseOver={item.onMouseOver}/>
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}  component={Link} href="/estimate" onClick={() => setValue(5)}>
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{
                    paper:classes.menu
                }}
                MenuListProps={{
                    onMouseLeave:handleClose
                }}
                elevation={0}
                keepMounted
                //  for search engine
                style={{zIndex:1302}}
                // menu item above the app bar
            >
                {menuItem.map((item,index)=>{
                    return (
                        <MenuItem 
                            key={"menu "+index} 
                            classes={{root:classes.menuItem}} 
                            onClick={(event) => handleMenuItemClick(event,index)} 
                            component={Link} 
                            href={item.link} 
                            selected={index === selectedIndex}
                            >
                            {item.name}</MenuItem>
                    )
                })}                          
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer}
                onClose={()=> setOpenDrawer(false)} 
                onOpen={() => setOpenDrawer(true)}
                classes={{paper:classes.drawer}}
                >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>

                    {routes.map(item=>(
                        <ListItem 
                            key={"draw "+item.activeIndex} 
                            className={classes.drawerItem} 
                            classes={{selected:classes.drawerItemSelectedStyle}}
                            divider 
                            button 
                            onClick={() => {setOpenDrawer(false); setValue(0)}} 
                            component={Link} 
                            href={item.link} 
                            selected={value === item.activeIndex}
                            >
                            <ListItemText  disableTypography>{item.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        className={[classes.drawerItem,classes.drawerItemEstimate].join(" ")} 
                        classes={{selected:classes.drawerItemSelectedStyle}}
                        divider 
                        button 
                        onClick={() => {setOpenDrawer(false); setValue(5)}} 
                        component={Link} 
                        href="/estimate" 
                        selected={value === 5}>
                        <ListItemText  disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
        
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} href="/" disableRipple className={classes.logContainer} onClick={() => {setValue(0)}}>
                            <img alt="company logo" className={classes.logo} src="/assets/logo.svg"/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
        
        
    )
}