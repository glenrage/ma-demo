import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ClassSelect = ({ handleChangeClass, course }) => {
  return (
    <List>
      <Typography>Select Your Classes below</Typography>
      {course && (
        <Select onChange={handleChangeClass}>
          {course.map((el) => {
            return (
              <MenuItem key={el.slug} value={el}>
                <Typography variant='h6'>{el.name}</Typography>
                <Typography variant='caption'>{`${el.startDate} to ${el.endDate}`}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      )}
    </List>
  );
};

export default ClassSelect;
