export const validateBirthday = (input, value) => {
    const isNumber = /^\d+$/.test(value);
    if (!isNumber) return false;

    if (input === 'birthDay') return value >= 1 && value <= 31;
    else if (input === 'birthMonth') {
      const validMonth = /^(0[1-9]|1[012])$/.test(value);
      return validMonth;
    } else {
      return value.length === 4;
    }
  };

  export const checkValidDates = (schedule, course) => {
    const hasDuplicates = schedule.filter((item) => {
      return item.slug.slice(0, 3) === course.slug.slice(0, 3);
    });
    if (hasDuplicates.length !== 0) return false;

    for (let i = 0; i < schedule.length; i++) {
      const curr = schedule[i];
      let courseStart = Date.parse(course.startDate);
      let courseEnd = Date.parse(course.endDate);
      let currentStart = Date.parse(curr.startDate);
      let currentEnd = Date.parse(curr.endDate);

      if (currentStart < courseEnd && courseStart < currentEnd) return false;
    }
    return true;
  };