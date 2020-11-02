import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorBox: {
    marginRight: '1px',
    marginLeft: '1px',
  },
  field: {
    width: '300px',
    height: '35px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  list: {
    width: '350px',
  },
}));

const ClassSelect = ({ handleChangeClass, course }) => {
  console.log(course)
  const classes = useStyles();
  return (
    <List>
      <Typography>Select Your Classes below</Typography>
      {course && (
        <Select
          onChange={handleChangeClass}
        >
          {course.map((el) => {
            return (
              <MenuItem key={el.slug} value={el}>
                <Typography variant="h6">{el.name}</Typography>
                <Typography variant='caption'>{`${el.startDate} to ${el.endDate}`}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      )}
    </List>
  );
};

ClassSelect.defaultProps = {
  /**
   * Function to close modal .
   */
};

export default ClassSelect;
