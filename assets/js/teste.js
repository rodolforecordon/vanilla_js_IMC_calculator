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
      return sufixes[4];
  }
}

console.log(getdaySuffix(28));