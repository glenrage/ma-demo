/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ClassSelect from './ClassSelect';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    marginLeft: '5px',
  },
  previewButton: {
    margin: '5px',
  },
  cancelButton: {
    margin: '5px',
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
    birthMonth: '',
    birthDay: '',
    birthYear: '',
  });
  console.log('a', userData)

  const {
    sportsCheck,
    artCheck,
    literatureCheck,
    musicCheck,
  } = subject.subjects;

  const emailError = !/\S+@\S+\.\S+/.test(userData.email);
  const showSubmit =
    !emailError && !showYearError && !showMonthError && !showDayError;

  const handleTextChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'birthMonth') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowMonthError(true) : setShowMonthError(false);
      setUserData({ ...userData, [name]: value });
    } else if (name === 'birthDay') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowDayError(true) : setShowDayError(false);
      setUserData({ ...userData, [name]: value });
    } else if (name === 'birthYear') {
      const validBirthday = validateBirthday(name, value);
      !validBirthday ? setShowYearError(true) : setShowYearError(false);
      setUserData({ ...userData, [name]: value });
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
      shouldAddSchedule
        ? currentSchedule.push(value)
        : setShowScheduleError(true);
    }
    setUserData({
      ...userData,
      schedule: currentSchedule,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSubject({
      subjects: {
        sportsCheck: false,
        artCheck: false,
        literatureCheck: false,
        musicCheck: false,
      },
    });
    setUserData({
      name: '',
      email: 'email@email.com',
      birthday: '',
      schedule: [],
    });
    setShowScheduleError(false);
    setShowYearError(false);
    setShowMonthError(false);
    setShowMonthError(false);
    setShouldRender(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { birthMonth, birthDay, birthYear } = userData;
    const bday = `${birthMonth}/${birthDay}/${birthYear}`;

    if (userData.schedule.length === 0) setShowScheduleError(true);

    setUserData({
      ...userData,
      birthday: bday,
      birthMonth: undefined,
      birthDay: undefined,
      birthYear: undefined,
    });
    setShouldRender(true);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
        <Grid container>
          <Grid item md={4}>
            <TextField
              className={classes.textField}
              onChange={handleTextChange}
              required
              label='Name'
              variant='outlined'
              name='name'
              value={userData.name}
            />
            <TextField
              className={classes.textField}
              required
              name='email'
              onChange={handleTextChange}
              label='Email Address'
              variant='outlined'
              error={emailError}
              helperText={emailError ? 'Invalid Email address' : null}
              value={userData.email}
            />
          </Grid>

          <Grid item md={12}>
            <TextField
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Month'
              variant='outlined'
              name='birthMonth'
              required
              error={showMonthError}
              helperText={showMonthError ? 'Invalid Month' : null}
            />
            <TextField
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Day'
              required
              variant='outlined'
              name='birthDay'
              error={showDayError}
              helperText={showDayError ? 'Invalid Day' : null}
            />
            <TextField
              required
              className={classes.birthdayField}
              onChange={handleTextChange}
              label='Year'
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
                Scheduling conflict! Please select a class or reset form and try
                again
              </FormHelperText>
            )}

            <FormGroup>
              <FormHelperText>
                You may select 1 class per area of study. Please ensure class
                dates do not overlap
              </FormHelperText>
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
          className={classes.cancelButton}
          onClick={handleReset}
          variant='outlined'
          color='secondary'
        >
          Reset
        </Button>
        <Button
          className={classes.previewButton}
          variant='outlined'
          color='primary'
          disabled={!showSubmit}
          type='submit'
        >
          Preview
        </Button>
      </form>
      <PreviewForm data={userData} shouldRender={shouldRender} />
    </div>
  );
}

export default MainForm;
