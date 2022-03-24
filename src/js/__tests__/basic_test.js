import sortByHealth from '../basic';

test('Тестирование сортировки по здоровью (c .toBe())', () => {
  const arrayData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const resolve = sortByHealth(arrayData);

  expect(resolve).not.toBe(expected);
});

test('Тестирование сортировки по здоровью (без .toBe())', () => {
  const arrayData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const resolve = sortByHealth(arrayData);

  expect(resolve).toEqual(expected);
});
