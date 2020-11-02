import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffff',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    justifyContent: 'center',
  },
}));


function Layout() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <h1>hello</h1>
      </Container>
    </div>
  );
}

export default Layout;
