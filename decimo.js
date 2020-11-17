function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function DateParser(date) {
  const dateArray = date.split('-')
  return(new Date(dateArray[0], dateArray[1], dateArray[2]))
}

module.exports =  function decimo(initial, final) {
  initial = DateParser(initial)
  final = DateParser(final)
  let rounds = 0;
  const initialMonthTotalDays = new Date(initial.getYear(), initial.getMonth() +1, 0).getDate();
  if (initialMonthTotalDays - initial.getDate() + 1 >= 15) rounds += 1; 
  if (final.getDate() >= 15) rounds += 1;
  rounds += monthDiff(initial, final) -1;
  return rounds;
}
