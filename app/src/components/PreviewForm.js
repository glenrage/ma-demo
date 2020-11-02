/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import { FormControlLabel, Checkbox, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ClassSelect from './ClassSelect';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
    padding: theme.spacing(0, 2, 4, 2),
  },
  errorBox: {
    marginRight: '1px',
    marginLeft: '1px',
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
    margin: theme.spacing(3, 0, 3, 6),
    minWidth: theme.spacing(10),
    fontWeight: '500',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function PreviewForm({ data, shouldRender }) {
  const classes = useStyles();

  let organization = '';
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      {shouldRender && (
        <Box mt={6} border={1} borderColor='#E7E7EA' borderRadius={15}>
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
                    className={classes.labels}
                    primary='Scheduled Classes'
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>

                    <ListItem button className={classes.nested}>
                      <ListItemText>Schedule</ListItemText>
                    </ListItem>

                    
                  </List>
                </Collapse>
              </Grid>
              <Box className={classes.spacing} />
            </Grid>
          </List>
        </Box>
      )}
    </div>
  );
}

PreviewForm.propTypes = {
  /**
   * Function to close modal .
   */
  onClose: PropTypes.string,
};

export default PreviewForm;
