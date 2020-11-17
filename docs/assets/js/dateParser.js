export default function dateParser(date) {
  const dateArray = date.split('-');
  return(new Date(dateArray[0], dateArray[1] - 1, dateArray[2]));
}
