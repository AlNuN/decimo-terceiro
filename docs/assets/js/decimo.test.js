import decimo from './decimo.js';
import dateParser from './dateParser.js'

function parsed (a, b, e) {
  return decimo(dateParser(a), dateParser(b), e);
}

test('Months apart, February limit, initial limit', () => {
  expect(parsed("2019-02-14", "2019-06-15")).toEqual(5);
});

test('Monts apart, February limit one day later', () => {
  expect(parsed("2019-02-15", "2019-06-15")).toEqual(4);
});

test('Months apart, February limit one day later, before final date initial limit', () => {
  expect(parsed("2019-02-15", "2019-06-14")).toEqual(3);
});

test('Same month, not worked 15 days', () => {
  expect(parsed("2020-09-04", "2020-09-17")).toEqual(0);
});

test('Same month, worked 15 days', () => {
  expect(parsed("2020-09-04", "2020-09-18")).toEqual(1);
});

test('Contiguous months initial limit not fufilled, final limit fufilled', () => {
  expect(parsed("2020-08-20", "2020-09-18")).toEqual(1);
});

test('Contiguous months initial limit fufilled, final limit not fufilled', () => {
  expect(parsed("2020-08-10", "2020-09-10")).toEqual(1);
});

test('Contiguous months none limit fufilled', () => {
  expect(parsed("2020-08-20", "2020-09-10")).toEqual(0);
});

test('Over years, specify year initial', () => {
  expect(parsed("2019-08-20", "2020-09-10", 2019)).toEqual(4);
});

test('Over years, specify year final', () => {
  expect(parsed("2019-08-20", "2020-09-10", 2020)).toEqual(8);
});

test('Same year, correct year specified', () => {
  expect(parsed("2019-02-14", "2019-06-15", 2019)).toEqual(5);
});

test('Specify wrong year under initial', () => {
  expect(parsed("2019-08-20", "2020-09-10", 2018)).toEqual('Ano fora dos limites');
});

test('Specify wrong year under initial', () => {
  expect(parsed("2019-02-14", "2020-06-15", 2018)).toEqual('Ano fora dos limites');
});

test('Specify wrong year above final', () => {
  expect(parsed("2019-08-20", "2020-09-10", 2021)).toEqual('Ano fora dos limites');
});

test('Same year, wrong year, above', () => {
  expect(parsed("2019-02-14", "2019-06-15", 2020)).toEqual('Ano fora dos limites');
});

test('Same year, wrong year, under', () => {
  expect(parsed("2019-02-14", "2019-06-15", 2017)).toEqual('Ano fora dos limites');
});

test('Initial larger than final', () => {
  expect(parsed("2019-02-14", "2018-06-15")).toEqual('Data inicial maior que final');
});

test('Not passing a initial date', () => {
  expect(parsed("", "2018-06-15")).toEqual('preencha os campos');
});

test('Not passing a final date', () => {
  expect(parsed("2019-02-14", "")).toEqual('preencha os campos');
});

test('Not passing any date', () => {
  expect(parsed("", "")).toEqual('preencha os campos');
});