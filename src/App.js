import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import Home from "./components/Home";
import WebLink from "./components/WebLink";
import UserInput from "./components/UserInput";


import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Encode Sans SC',
    ].join(','),
  },
});




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(.5),
  },
  title: {
    flexGrow: 1,
  },
  demo2: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  padding: {
    fontSize: 23
  }
}));

const StyledTabs = withStyles({
  flexGrow: 1,
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'grey',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    font: 'Encode Sans SC',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" style={{background: '#13294b'}}>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" to='/' component={Link}>
              
            </IconButton> */}
            <div className={classes.demo2}>
              {/* <IconButton edge="start" className={classes.menuButton} onClick={(event, newValue) => { setValue(0) }} color="inherit" aria-label="menu" to='/' component={Link}>
                <img src={logo_i} alt='Logo' height='60'/>
              </IconButton> */}
              
              
              <div style={{flexGrow: 1, marginRight: 400}}>
                <p style={{fontFamily: 'Encode Sans SC'}} className={classes.padding}>Drought Data Project</p>
              </div>
              <ThemeProvider theme={customTheme}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs navbar">
                  <StyledTab label="Home" to='/home' component={Link}/>
                  <StyledTab label="WebLink" to='/weblink' component={Link}/>
                  <StyledTab label="UserInput" to='/userinput' component={Link}/>
                </StyledTabs>
              </ThemeProvider>
            </div>
            {/* <Button color="inherit" onClick={(event, newValue) => { setValue("login") }} component={Link} to="/user">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/weblink" component={WebLink} />
          <Route path="/userinput" component={UserInput} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
