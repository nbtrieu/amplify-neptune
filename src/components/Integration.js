import React,{useState,useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
import { API, graphqlOperation } from 'aws-amplify';
import {getGraphInfo,getProfile} from '../../src/graphql/queries'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SchoolIcon from '@material-ui/icons/School';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

export const Integration = () => {
    const classes = useStyles();
    const [value, setValue] = useState('id');
    const [name, setName] = useState('')
    const [state,setState] = useState('1st')
    const [profile, setProfile] = useState([])
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    console.log('profile length',profile.length)
    useEffect(() => {
      getInformation()
    },[name])
    
    const color = e => {
      console.log(e)
      switch (e) {
            case 'person':
              return 'red'
            case 'product':
              return 'blue'
            case 'institution':
              return 'green'
            case 'paper':
              return 'orange'
            case 'conference':
              return 'purple'
      }
    }
     const executeQuery = async e => {
      console.log('execute button')
      console.log(state)
      e.preventDefault()
          await API.graphql(graphqlOperation(getGraphInfo,{value:value}))
                .then(res => {
                  console.log(res.data.getGraphInfo)
                    setState(res.data.getGraphInfo)
                })
          // state.nodes.map(node => (console.log(node.id)))
    }
    
    const getInformation = async e => {
      // e.preventDefault()
      console.log(name)
      await API.graphql(graphqlOperation(getProfile,{value:value,name:name}))
                .then(async res => {
                  await console.log('getProfile API',res.data.getProfile)
                  await setProfile(res.data.getProfile)
                })
              console.log(profile)
      
    }

    return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
       <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                <Card className={fixedHeightPaper}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vizualization Graph
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary" component="p" gutterBottom >
                      Visualize your Amazon Neptune graph data using react-vis-force.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Red:Person
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Blue:Product
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Orange:Paper
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Green: Institution
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Purple: Conference
                    </Typography>
                    <div className={classes.buttonAlign}>
                                <Button 
                                  variant="contained"
                                  color="primary"
                                  size="medium"
                                  className={classes.button}
                                  onClick={executeQuery}>Vizualize</Button>
                    </div>
                    </CardContent>
                   </Card>
                </Grid>
        
        <Grid item  xs={12} lg={6}>
              <Paper className={fixedHeightPaper}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Information</FormLabel>
                {profile.map((rname) => (
                  rname.search_name !== "[]" ?
                      <Typography variant="h6" gutterBottom>{rname.search_name}</Typography> : 
                      <Typography variant="h6" gutterBottom></Typography> 
                    )) }

                  
                        <Typography>
                            {profile.length !== 0 ?
                               profile.map((line) => (
                               <List className={classes.list}>
                               {line.affiliated_with !== "[]" && 
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
                             {line.usage !== "[]" && 
                            <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                  <FavoriteIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Use"  secondary={line.usage}/>
                            </ListItem>
                             }
                            <Divider variant="inset" component="li" />
                             {line.belong_to !== "[]" && 
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
                           {line.authored_by !== "[]" && 
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
                           {line.people !== "[]" && 
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <GroupIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Academic member" secondary={line.people}/>
                            </ListItem>
                           }
                             { line.made_by !== "[]"  && 
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
                <FormLabel component="legend">Graph</FormLabel>
              </FormControl>
                <InteractiveForceGraph
                  highlightDependencies
                  simulationOptions={{ animate: true , alpha: 1}}
                  onSelectNode={(node,event) => {console.log('onSelect',event)
                    setName(event.id)
                  }}
                  onDeselectNode={(node,event) => {console.log('onDeSelect',event)}}
                  >
                      {state !== '1st' ?
                      state.nodes.map( (node) => (
                      <ForceGraphNode
                        key={node.id}
                        fill={color(node.label)}
                        node={{ ...node, radius: 5 }}
                      />
                      ))
                        :<Typography>Test
                        </Typography>
                      }
                      
                      {state !== '1st' ?
                      state.links.map( (link) => (
                      <ForceGraphLink
                        key={`${link.source}=>${link.target}`}
                        link={{ ...link, value: 2 }}
                      />
                      ))
                        :<Typography>Test
                        </Typography>
                      }
                  </InteractiveForceGraph>
                </Paper>
              </Grid>
            </Grid>
        </Container>
      </main>
    </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    //paddingTop: '56.25%', // 16:9
    maxHeight: '220px',
    width:'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  fixedHeight: {
    height: 300,
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
  buttonAlign:{
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));



