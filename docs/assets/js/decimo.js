function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export default function decimo (initial, final, year){
  let rounds = 0;
  if (year !== undefined) {
    if (initial.getFullYear() !== final.getFullYear()){
      if (initial.getFullYear() < year) initial = new Date(year, 0,1);
      if (final.getFullYear() > year) final = new Date(year, 11,31);
    } else {
      if (year !== initial.getFullYear()) {
        return 0;
      }
    }
  }
  const initialMonthTotalDays = new Date(initial.getYear(), initial.getMonth() + 1, 0).getDate();
  if (initial.getMonth() === final.getMonth() && initial.getFullYear() === final.getFullYear()) {
    return final.getDate() - initial.getDate() >= 14 ? 1 : 0;
  }
  if (initialMonthTotalDays - initial.getDate() + 1 >= 15) rounds += 1; 
  if (final.getDate() >= 15) rounds += 1;
  rounds += monthDiff(initial, final) -1;
  return rounds;
}