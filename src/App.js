import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
//changes to imports 
import FeedbackIcon from '@material-ui/icons/Feedback';//feedback
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';//requests
import GroupAddIcon from '@material-ui/icons/GroupAdd';//category
import AddCircleIcon from '@material-ui/icons/AddCircle';//dress

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <>
  <div className="App">
    <ThemeProvider theme={theme}>
      {/* <Router>
      <NavBar/>
      <Switch>
       <Route path='/' exact component={Home} />
      </Switch>

      </Router>  */}
      <NavBar/>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<QuestionAnswerIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>} btnTitle="Requests" />
          <Grid icon={<GroupAddIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} btnTitle="Add Category"/>
          <Grid icon={<AddCircleIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>} btnTitle=" Add Dress"/>
          <Grid icon={<FeedbackIcon style={{fill: "#E69426", height:"125", width:"125"}}/>} btnTitle="Feedback"/>
        </div>
    </ThemeProvider>
   </div>
   </>
  );
}

export default App;
