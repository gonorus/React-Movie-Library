/* eslint-disable no-console */
import Console from '../../helpers/Console';

describe('Console', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => { });
    jest.spyOn(console, 'debug').mockImplementation(() => { });
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterAll(() => {
    console.log.mockRestore();
    console.debug.mockRestore();
    console.error.mockRestore();
  });

  afterEach(() => {
    console.log.mockClear();
    console.debug.mockClear();
    console.error.mockClear();
  });

  it('Console Log', () => {
    Console.Log('console log');
    expect(console.log).toHaveBeenCalled();
  });

  it('Console Debug', () => {
    Console.Debug('console debug');
    expect(console.debug).toHaveBeenCalled();
  });

  it('Console Error', () => {
    Console.Error('console error');
    expect(console.error).toHaveBeenCalled();
  });
});
