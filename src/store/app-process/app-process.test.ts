import { CityName, SortOption } from '../../const';
import { appProcess, changeActiveCity, setSortedType } from './app-process';

describe('AppProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      activeCity: CityName.Paris,
      activeSortedType: SortOption.Popular,
    };

    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      activeCity: CityName.Paris,
      activeSortedType: SortOption.Popular,
    };

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "activeCity" with "changeActiveCity" action', () => {
    const initialState = {
      activeCity: CityName.Paris,
      activeSortedType: SortOption.Popular,
    };

    const expectedState = {
      activeCity: CityName.Amsterdam,
      activeSortedType: SortOption.Popular,
    };

    const result = appProcess.reducer(initialState, changeActiveCity(CityName.Amsterdam));

    expect(result).toEqual(expectedState);
  });

  it('should set "activeSortedType" city with "setSortedType" action', () => {
    const initialState = {
      activeCity: CityName.Paris,
      activeSortedType: SortOption.Popular,
    };

    const expectedState = {
      activeCity: CityName.Paris,
      activeSortedType: SortOption.PriceHighToLow,
    };

    const result = appProcess.reducer(initialState, setSortedType(SortOption.PriceHighToLow));

    expect(result).toEqual(expectedState);
  });
});
