const decimo = require('./decimo');

test('Lorena Case', () => {
  expect(decimo("2019-02-14", "2019-06-15")).toEqual(5);
});

xtest('Lorena Case one day later initial', () => {
  expect(decimo(new Date(2019,2,15), new Date(2019,6,15))).toEqual(4);
});

xtest('Lorena Case one day later initial', () => {
  expect(decimo(new Date(2019,2,15), new Date(2019,6,14))).toEqual(3);
});