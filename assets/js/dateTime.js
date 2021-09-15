setInterval(
  clock, 1000
);

function clock() {
  const clock = document.querySelector('#complete-date')
  clock.innerHTML = finalDate(new Date());
}

function finalDate(date) {
  const weekDay = getWeekDay(date.getDay());
  const month = getMonthName(date.getMonth());
  const day = date.getDate();
  const daySuffix = getdaySuffix(date.getDate());
  const year = date.getFullYear();
  const hour = leftZero(date.getHours());
  const min = leftZero(date.getMinutes());
  const sec = leftZero(date.getSeconds());

  return `${weekDay}, ${month} ${day}${daySuffix} ${year} ${hour}:${min}:${sec}`
}

function getMonthName(monthNum) {
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  switch (monthNum) {
    case 0:
      return monthNames[0];
    case 1:
      return monthNames[1];
    case 2:
      return monthNames[2];
    case 3:
      return monthNames[3];
    case 4:
      return monthNames[4];
    case 5:
      return monthNames[5];
    case 6:
      return monthNames[6];
    case 7:
      return monthNames[7];
    case 8:
      return monthNames[8];
    case 9:
      return monthNames[9];
    case 10:
      return monthNames[10];
    case 11:
      return monthNames[11];
  }
}

function getWeekDay(weekDayNum) {
  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  switch (weekDayNum) {
    case 0:
      return weekDays[0];
    case 1:
      return weekDays[1];
    case 2:
      return weekDays[2];
    case 3:
      return weekDays[3];
    case 4:
      return weekDays[4];
    case 5:
      return weekDays[5];
    case 6:
      return weekDays[6];
  }
}

function getdaySuffix(dayNum) {
  const sufixes = ['st','nd','rd','th']
  switch (dayNum) {
    case 1:
      return sufixes[0];
    case 2:
      return sufixes[1];
    case 3:
      return sufixes[2];
    case 11:
      return sufixes[0];
    case 12:
      return sufixes[1];
    case 13:
      return sufixes[2];
    case 21:
      return sufixes[0];
    case 22:
      return sufixes[1];
    case 23:
      return sufixes[2];
    case 31:
      return sufixes[0];
    default:
      return sufixes[3];
  }
}

function leftZero(number) {
  return number >=10 ? number : `0${number}`
}
