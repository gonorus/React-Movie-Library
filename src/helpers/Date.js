/**
 * get month full name from Date object
 * @param {Date} date
 * @example
 * DateToYMD(new Date('2021-12-04')) => 'December'
 */
export const GetMonthFullName = (date) => date.toLocaleString('default', { month: 'long' });

/**
 * get month short name from Date object
 * @param {Date} date
 * @example
 * DateToYMD(new Date('2021-12-04')) => 'Dec'
 */
export const GetMonthShortName = (date) => date.toLocaleString('default', { month: 'short' });

/**
 * parse Date object into MDY format
 * @param {Date} date
 * @example
 * DateToYMD(new Date('2021-12-04')) => 'Dec 04, 2021'
 */
export const DateToMDY = (date) => {
  const day = date.getDate();
  const month = GetMonthShortName(date);
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
