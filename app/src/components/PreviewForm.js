/* eslint-disable no-unused-expressions */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
    padding: theme.spacing(0, 2, 4, 2),
  },
  spacing: {
    margin: '10px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#E7E7EA',
  },
  content: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  labels: {
    margin: theme.spacing(3, 0, 3, 4),
    minWidth: theme.spacing(10),
    fontWeight: '500',
  },
  schedule: {
    margin: theme.spacing(3, 0, 0, 2),
    fontWeight: '600',
  },
  nested: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  button: {
    display: 'flex',
    marginLeft: 'auto',
    margin: '5px',
  },
}));

function PreviewForm({ data, shouldRender }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      {shouldRender && (
        <>
          <Box mt={0} border={1} borderColor='#E7E7EA' borderRadius={15}>
            <List>
              <Grid container direction='row'>
                <Grid>
                  <Typography className={classes.labels}>Name</Typography>
                </Grid>
                <Box className={classes.spacing} />
                <Grid>
                  <ListItemText className={classes.content}>
                    {data.name}
                  </ListItemText>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <Grid container direction='row'>
                <Grid>
                  <Typography className={classes.labels}>
                    Email Address{' '}
                  </Typography>
                </Grid>
                <Box className={classes.spacing} />
                <Grid>
                  <ListItemText className={classes.content}>
                    {data.email}{' '}
                  </ListItemText>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />

              <Grid container direction='row'>
                <Grid>
                  <Typography className={classes.labels}>Birthday </Typography>
                </Grid>
                <Box className={classes.spacing} />
                <Grid>
                  <ListItemText className={classes.content}>
                    {data.birthday}{' '}
                  </ListItemText>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />

              <Grid container direction='row'>
                <Grid>
                  <ListItem button onClick={handleClick}>
                    <ListItemText
                      className={classes.schedule}
                      primary='Scheduled Classes'
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout='auto' unmountOnExit>
                    <List>
                      {data.schedule.map((item) => {
                        return (
                          <ListItem button className={classes.nested}>
                            <Grid direction='row' item md={10}>
                              <Typography variant='h6'>{item.name}</Typography>
                            </Grid>

                            <ListItemText>{`${item.startDate} to ${item.endDate}`}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </Grid>
                <Box className={classes.spacing} />
              </Grid>
            </List>
          </Box>
          <Button
            onClick={handleDownload}
            className={classes.button}
            variant='outlined'
            color='primary'
          >
            Download JSON data
          </Button>
        </>
      )}
    </div>
  );
}

export default PreviewForm;
