const leapYears = function (year) {
  let result = false;
  if ((year % 4 == 0 || year % 400 == 0) && year % 100 != 0) {
    result = true;
  } else if (year % 400 == 0 && year % 100 == 0) {
    result = true;
  } else if (year % 400 != 0 && year % 100 == 0) {
    result = false;
  }

  return result;
};
// Do not edit below this line
module.exports = leapYears;
