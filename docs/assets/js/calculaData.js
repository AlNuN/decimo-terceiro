import decimo from './decimo.js';
import dateParser from './dateParser.js'

(function calculaData () {
  document.getElementById('button').addEventListener('mouseup', (e) => {
    const initial = document.getElementById('initial').value
    const final = document.getElementById('final').value
    const year  = document.getElementById('year').value

    console.log(initial, final)

    const result = decimo(dateParser(initial), dateParser(final), 
      year !== ''? Number(year) : undefined);

    console.log(result)

    const response = document.getElementById('resposta');
    response.innerHTML = '';
    response.innerHTML = result;
  })
})()