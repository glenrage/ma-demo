import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MainForm from './components/MainForm'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffff',
    display: 'flex',
  },
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
