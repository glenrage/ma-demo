import Layout from './components/Layout'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import MainForm from './components/MainForm'

const useStyles = makeStyles(() => ({
  // root: {
  //   backgroundColor: '#ffff',
  //   margin: '10px',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h1>hello Media Alpha</h1>
        <MainForm />
      </Container>
    </div>
  );
}

export default App;
