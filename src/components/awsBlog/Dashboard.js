import {useState} from 'react';
import awsmobile from '../../aws-exports';
// import PropTypes from 'prop-types'


import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {getResult,getProfile} from '../../src/graphql/queries'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



Amplify.configure(awsmobile);

const drawerWidth = 240;

export const Dashboard = ()  => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('')
    const [state,setState] = useState([])
    const [profile, setProfile] = useState([])
    const [searchName,setSearchName] = useState('')

    
    const executeQuery = async e => {
      e.preventDefault()
      getInformation()
      setSearchName(name)
          await API.graphql(graphqlOperation(getResult,{value:value,name:name}))
                .then(res => {
                  // console.log(res.data)
                    setState(res.data.getResult)
                })
          setName('')
    }
    
     const getInformation = async e => {
      // e.preventDefault()
      console.log('change value')
      await API.graphql(graphqlOperation(getProfile,{value:value,name:name}))
                .then(async res => {
                  await console.log('getProfile API',res.data.getProfile)
                  await setProfile(res.data.getProfile)
                })
      
    }

    console.log(state,'State')
    console.log(profile,'Profile')

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container fixed className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Paper className={fixedHeightPaper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Selection</FormLabel>
                <RadioGroup aria-label="classification" name="classification" value={value} onChange={e => setValue(e.target.value)
                  }>
                  <FormControlLabel value="person" control={<Radio />} label="Search for 'Acadmic member' of Affiliated academic society from 'Person Name'" />
                    <Typography variant="italic"> 'Person' -> Affiliated academic society -> 'Acadmic member' </Typography>
                  <FormControlLabel value="product" control={<Radio />} label="Search for 'Co Author' of Paper from the User of 'Product Name'" />
                    <Typography variant="italic"> 'Product' -> Person -> -> Paper -> 'Co Author' </Typography>
                  <FormControlLabel value="conference" control={<Radio />} label="Search for 'Acquaintance' of Acadmic member from 'Affiliated academic society'" />
                    <Typography variant="italic"> 'Affiliated academic society' -> Academic member -> 'Acquaintance' </Typography>
                </RadioGroup>
              </FormControl>
              <TextField
                  required
                  id="name"
                  name="name"
                  label="Enter name"
                  fullWidth
                  autoComplete="name"
                  value={name}
                  onChange={
                    e => setName(e.target.value)
                  }
                />
                <div className={classes.buttons}>
                <Grid item xs={8} lg={8}>
                <Button 
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                  onClick={executeQuery}>Execute</Button>
                </Grid>
                </div>
            </Paper>
            </Grid>
            
            <Grid item  xs={12} lg={4}>
              <Paper className={fixedHeightPaper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Search Overview</FormLabel>
                <Typography variant="h6" gutterBottom>
                     {searchName}
                </Typography>
                
                <Typography>
                    {profile.length !== 0 ?
                       profile.map((line) => (
                       <List className={classes.list}>
                       {line.affiliated_with !== null  && 
                       <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BusinessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Institution" secondary={line.affiliated_with}/>
                      </ListItem>
                       }
                    <Divider variant="inset" component="li" />
                     {line.usage !== null  && 
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                          <FavoriteIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Products to use"  secondary={line.usage}/>
                    </ListItem>
                     }
                    <Divider variant="inset" component="li" />
                     {line.belong_to!== null  && 
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SchoolIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Affiliated academic society" secondary={line.belong_to}/>
                    </ListItem>
                     }
                    <Divider variant="inset" component="li" />
                   {line.authored_by!== null  && 
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <MenuBookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Paper" secondary={line.authored_by}/>
                    </ListItem>
                   }
                   <Divider variant="inset" component="li" />
                   {line.people!== null  && 
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <GroupIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Academic member" secondary={line.people}/>
                    </ListItem>
                   }
                     {line.made_by !== null  && 
                     <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BusinessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Pharmaceutical company" secondary={line.made_by}/>
                    </ListItem>
                     }
                  </List>
                        ))
                  :
                      <Typography component="p" color="textSecondary" variant="h6">
                        
                      </Typography>
                    }
                  </Typography>
              </FormControl>
              </Paper>
              
            </Grid>

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Result</FormLabel>

              </FormControl>
                { state.length !== 0 ?
                  state.map((row) => (
                  <List className={classes.list}>
                     <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.name}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                  ))
                : <Typography component="p" color="textSecondary" variant="h6">
                    No Results
                  </Typography>
                }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
  );
}


const useStyles = makeStyles((theme) => ({
  list:{
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 350,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    justifyContent: 'flex-end'
  },
}));
