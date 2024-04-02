import React,{useEffect} from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {registerInfo} from '../../src/graphql/mutations'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export const RegisterData = () => {
    const [name,setName] = useState('')
    const [value, setValue] = useState('')
    const [edge, setEdge] = useState('')
    const [vertex,setVertex] = useState('')
    const [property, setProperty] = useState('')
    const [source,setSource] = useState('')
    const [open, setOpen] = useState('');
    const [destination,setDestication] = useState('')
    const array = ['person','institution','paper','conference','product']
    const sourceLabel = 
      {
        'affiliated_with':array[0],'authored_by':array[2],
        'belong_to':array[0],'usage':array[0],
        'knows':array[0],'made_by':array[1]
      }
    const destLabel = 
      {
        'affiliated_with':array[1],'authored_by':array[0],
        'belong_to':array[3],'usage':array[4],
        'knows':array[0],'made_by':array[4]
      }
    
    useEffect(() => {
      setName('')
      setProperty('')
      setSource('')
      setDestication('')
    },[vertex,edge])
    
    const classes = useStyles();

    const handleChange = (event) => {
        console.log('event',event.target)
        value === 'vertex'
          ? setVertex(event.target.value)
          : 
          setEdge(event.target.value)
          // setSourceLabel()
          // setDestLabel()
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const registerData = async e => {
          e.preventDefault()
        console.log('name',name)
        console.log('value',value)
        console.log('edge',edge)
        console.log('vertex',vertex)
        console.log('source',source)
        console.log('destination',destination)
        console.log('property',property)
        await API.graphql(graphqlOperation(registerInfo,{
                value:value,
                name:name,
                edge:edge,
                vertex:vertex,
                property:property,
                source:source,
                sourceLabel:sourceLabel[edge],
                destination:destination,
                destLabel : destLabel[edge]

              })).then(async res => {
                       await console.log('getProfile API',res.data)
                       handleClickOpen()
                    })
      }
    console.log(edge)
    console.log('sourceLabel',sourceLabel[edge])
     console.log('destLabel',destLabel[edge])
   
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container fixed className={classes.container}>
           <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Vertex/Edge</FormLabel>
                <RadioGroup aria-label="classification" name="classification" value={value} onChange={e => setValue(e.target.value)
                  }>
                  <FormControlLabel value="vertex" control={<Radio />} label="Vertex" />
                  <FormControlLabel value="edge" control={<Radio />} label="Edge" />
                </RadioGroup>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              {value === 'vertex'
                ?
                <FormControl variant="outlined" className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Label</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={vertex}
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value="person">person</MenuItem>
                            <MenuItem value="paper">paper</MenuItem>
                            <MenuItem value="product">product</MenuItem>
                            <MenuItem value="conference">affiliated academic society</MenuItem>
                            <MenuItem value="institution">institution</MenuItem>

                       </Select>
                  </FormControl>

                :<FormControl variant="outlined" className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Edge Name</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={edge}
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value="affiliated_with">Institution</MenuItem>
                            <MenuItem value="authored_by">Paper</MenuItem>
                            <MenuItem value="belong_to">Affiliated academic society</MenuItem>
                            <MenuItem value="usage">Products to use</MenuItem>
                            <MenuItem value="knows">Know</MenuItem>
                            <MenuItem value="made_by">Seller</MenuItem>

                       </Select>
                  </FormControl>
                }
                </Grid>

            { value === 'vertex'
            ?
            <Grid item xs={12} sm={6}>
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
              </Grid> 
              :
              <Typography></Typography>
              
            }
            { (() => {
              if (value === 'vertex') {
              switch(vertex) {
                case "person":
                  return <Grid item xs={12} sm={6}>
                     <TextField
                              id="speciality"
                              name="speciality"
                              label="Enter speciality"
                              fullWidth
                              autoComplete="name"
                              value={property}
                              onChange={
                                e => setProperty(e.target.value)
                              }
                            />
                    </Grid>  
                case 'paper':
                   return <Grid item xs={12} sm={6}>
                       <TextField
                                required
                                id="publich date"
                                name="publich date"
                                label="Enter publich date"
                                fullWidth
                                autoComplete="publich date"
                                value={property}
                                onChange={
                                  e => setProperty(e.target.value)
                                }
                              />
                      </Grid>
                default :
                   <Grid item xs={12} sm={6}>
                      <Typography></Typography>
                    </Grid> 
              } 
            } else {
              return (
                <>
                  <Grid item xs={12} sm={6}>
                     <TextField
                              required
                              id="source"
                              name="source"
                              label="source"
                              fullWidth
                              autoComplete="source"
                              value={source}
                              onChange={
                                e => setSource(e.target.value)
                              }
                            />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                     <TextField
                              required
                              id="destination"
                              name="destination"
                              label="destination"
                              fullWidth
                              autoComplete="destination"
                              value={destination}
                              onChange={
                                e => setDestication(e.target.value)
                              }
                            />
                    </Grid>
                </>
              )
            }
                
              })()
            }
                
                
          <Grid item xs={12} justify="center">
           { (() => {
              if (value === 'edge') {
                  switch(edge) {
                    case 'affiliated_with':
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2" >Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              name : {source}
                              </Typography>
                          </CardContent>
                          </Card>
                              <Typography color="textPrimary" variant="h4">
                                {edge}
                              </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Institution ({array[1]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
                        
                    case 'authored_by':
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2" >Paper ({array[2]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {source}
                              </Typography>
                          </CardContent>
                          </Card>
                              <Typography color="textPrimary" variant="h4">
                                {edge}
                              </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
                        
                    case 'belong_to':
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2" >Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {source}
                                  </Typography>
                          </CardContent>
                          </Card>
                          <Typography color="textPrimary" variant="h4">
                            {edge}
                          </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Academic society ({array[3]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
                        
                    case 'usage':
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2" >Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                    name : {source}
                              </Typography>
                          </CardContent>
                          </Card>
                          <Typography color="textPrimary" variant="h4">
                            {edge}
                          </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Product ({array[4]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                      name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
                        
                    case 'knows':
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2" >Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {source}
                              </Typography>
                          </CardContent>
                          </Card>
                              <Typography color="textPrimary" variant="h4">
                            {edge}
                          </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Person ({array[0]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
                        
                    default:
                        return <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Source</Typography>
                              <Typography color="primary" variant="h5" component="h2">
                                Pharmaceutical company ({array[1]})
                              </Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {source}
                              </Typography>
                          </CardContent>
                          </Card>
                          <Typography color="textPrimary" variant="h4">
                            {edge}
                          </Typography>
                          <Card className={classes.root}>
                          <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>Destination</Typography>
                              <Typography color="primary" variant="h5" component="h2">Product ({array[4]})</Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                  name : {destination}
                              </Typography>
                          </CardContent>
                          </Card>
                        </Breadcrumbs>
               } 
               }else {
               return 
                    <Typography color="textPrimary" variant="h4">
                            verterx
                          </Typography>
               }
                
                })()
            }
        </Grid>
        <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
        <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddBoxIcon />}
              onClick={registerData}
            >
          Add
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Registered"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Operation has been completed successfully!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
              </Grid>
        </Container>
       
    </main>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  bread:{
    justifyContent:'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    justifyContent: 'flex-end',
  },
}));

