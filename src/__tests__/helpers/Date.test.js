import { DateToMDY, GetMonthFullName, GetMonthShortName } from '../../helpers/Date';

test('Convert Date to Month full name', () => {
  expect(GetMonthFullName(new Date('2021-12-04'))).toBe('December');
});

test('Convert Date to Month short name', () => {
  expect(GetMonthShortName(new Date('2021-12-04'))).toBe('Dec');
});

test('Convert Date to Month Day, Year', () => {
  expect(DateToMDY(new Date('2021-12-04'))).toBe('Dec 4, 2021');
});
