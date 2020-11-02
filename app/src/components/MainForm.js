/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
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
import PreviewForm from './PreviewForm';
import { validateBirthday, checkValidDates } from '../utils';
import { classDates } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    width: '500px',
  },
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
  formLeft: {
    paddingLeft: theme.spacing(1),
  },
  textField: {
    width: '245px',
    margin: '5px',
  },
  birthdayField: {
    width: '75px',
    margin: '5px',
  },
}));

function MainForm() {
  const classes = useStyles();
  const [shouldRender, setShouldRender] = useState(false);
  const [showMonthError, setShowMonthError] = useState(false);
  const [showDayError, setShowDayError] = useState(false);
  const [showYearError, setShowYearError] = useState(false);
  const [showScheduleError, setShowScheduleError] = useState(false);
  const [subject, setSubject] = useState({
    subjects: {
      sportsCheck: false,
      artCheck: false,
      literatureCheck: false,
      musicCheck: false,
    },
  });

  const [userData, setUserData] = useState({
    name: '',
    email: 'email@email.com',
    birthday: '',
    schedule: [],
  });

  const handleTextChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'birthMonth') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowMonthError(true) : setShowMonthError(false);
    } else if (name === 'birthDay') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowDayError(true) : setShowDayError(false);
    } else if (name === 'birthYear') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowYearError(true) : setShowYearError(false);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleCheckChange = (e) => {
    const currentState = subject.subjects;
    const { checked, name } = e.target;
    currentState[name] = checked;
    setSubject({ ...userData, subjects: currentState });
  };

  const handleChangeClass = (e) => {
    const { value } = e.target;
    const currentSchedule = userData.schedule;
    if (currentSchedule.length === 0) {
      currentSchedule.push(value);
      setUserData({
        ...userData,
        schedule: currentSchedule,
      });
      return;
    }

    if (currentSchedule.length >= 1) {
      const shouldAddSchedule = checkValidDates(userData.schedule, value);

      shouldAddSchedule ? currentSchedule.push(value) : null
    }
    setUserData({
      ...userData,
      schedule: currentSchedule,
    });
  };

  const handleReset = () => {
    setSubject({
      subjects: {
        sportsCheck: false,
        artCheck: false,
        literatureCheck: false,
        musicCheck: false,
      },
    });
    setUserData({
      ...userData,
      schedule: [],
      name: '',
      email: '',
      birthday: '',
    });
  };

  function handleSubmit() {
    const { birthMonth, birthDay, birthYear } = userData;

    setUserData({
      ...userData,
      birthday: `${birthMonth}/${birthDay}/${birthYear}`,
    });
    setShouldRender(true);
  }

  console.log('u data', userData);

  const {
    sportsCheck,
    artCheck,
    literatureCheck,
    musicCheck,
  } = subject.subjects;

  const emailError = /\S+@\S+\.\S+/.test(userData.email);

  return (
    <div className={classes.root}>
      <form className={classes.form} autoComplete='off'>
        <Grid container>
          <Grid item md={4}>
            <TextField
              className={classes.textField}
              onChange={handleTextChange}
              required
              label='Name'
              variant='outlined'
              name='name'
              defaultValue='Name'
            />
            <TextField
              className={classes.textField}
              required
              name='email'
              onChange={handleTextChange}
              label='Email Address'
              variant='outlined'
              error={!emailError}
              helperText={!emailError ? 'Invalid Email address' : null}
            />
          </Grid>

          <Grid item md={12} direction='row'>
            <TextField
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Month'
              defaultValue='01'
              variant='outlined'
              name='birthMonth'
              error={showMonthError}
              helperText={showMonthError ? 'Invalid Month' : null}
            />
            <TextField
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Day'
              defaultValue='01'
              variant='outlined'
              name='birthDay'
              error={showDayError}
              helperText={showDayError ? 'Invalid Day' : null}
            />
            <TextField
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Year'
              defaultValue='1980'
              variant='outlined'
              name='birthYear'
              error={showYearError}
              helperText={showYearError ? ' Invalid Year' : null}
            />
          </Grid>

          <FormControl component='fieldset' error={showScheduleError}>
            <FormLabel component='legend'>Select Classes</FormLabel>
            {showScheduleError && (
              <FormHelperText>
                Only 1 class per area or scheduling conflict
              </FormHelperText>
            )}

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sportsCheck}
                    onChange={handleCheckChange}
                    name='sportsCheck'
                  />
                }
                label='Sports'
              />

              {sportsCheck && (
                <ClassSelect
                  data={userData}
                  handleChangeClass={handleChangeClass}
                  course={classDates.dates.sports}
                />
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={artCheck}
                    onChange={handleCheckChange}
                    name='artCheck'
                  />
                }
                label='Art'
              />

              {artCheck && (
                <ClassSelect
                  data={userData}
                  handleChangeClass={handleChangeClass}
                  course={classDates.dates.art}
                />
              )}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={literatureCheck}
                    onChange={handleCheckChange}
                    name='literatureCheck'
                  />
                }
                label='Literature'
              />

              {literatureCheck && (
                <ClassSelect
                  data={userData}
                  handleChangeClass={handleChangeClass}
                  course={classDates.dates.literature}
                />
              )}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={musicCheck}
                    onChange={handleCheckChange}
                    name='musicCheck'
                  />
                }
                label='Music'
              />
              {musicCheck && (
                <ClassSelect
                  data={userData}
                  handleChangeClass={handleChangeClass}
                  course={classDates.dates.music}
                />
              )}
            </FormGroup>
          </FormControl>
        </Grid>
        <Button
          className={classes.button}
          onClick={handleReset}
          type='submit'
          variant='outlined'
          color='primary'
        >
          Cancel
        </Button>
        <Button
          className={classes.button}
          onClick={handleSubmit}
          type='submit'
          variant='outlined'
          color='primary'
          disabled={!showScheduleError && !showYearError && !showMonthError && !showMonthError}
        >
          Confirm
        </Button>
      </form>
      <PreviewForm data={userData} shouldRender={shouldRender} />
    </div>
  );
}

MainForm.propTypes = {
  /**
   * Function to close modal .
   */
  // onClose: PropTypes.string,
};

export default MainForm;
