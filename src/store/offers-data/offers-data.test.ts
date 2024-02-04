import { Status } from '../../const';
import { fakeFavorite, fakeFavoriteOffer, fakeFavoritePreviewOffer, fakeNotFavorite, fakePreviewOffer, noFavoriteOffer } from '../../utils/mocks';
import { fetchFavoritesAction, fetchOffersAction, postFavoriteStatusAction } from '../api-actions';
import { dropFavorites, offersData } from './offers-data';

describe('OffersData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should reset offer and nearPlaces with "dropOffer" action', () => {
    const initialState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [fakeFavoriteOffer],
      fetchingFavoritesStatus: Status.Idle,
    };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(initialState, dropFavorites);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Loading" with "fetchOffersAction.pending" action', () => {
    const expectedState = {
      fetchingStatus: Status.Loading,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" with "fakePreviewOffer" and "fetchingStatus" to "Success" with "fetchOffersAction.fulfilled" action', () => {
    const expectedState = {
      fetchingStatus: Status.Success,
      offers: [fakePreviewOffer],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(undefined, fetchOffersAction.fulfilled(
      [fakePreviewOffer], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Error" with "fetchOffersAction.rejected" action', () => {
    const expectedState = {
      fetchingStatus: Status.Error,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(undefined, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingFavoritesStatus" to "Loading" with "fetchFavoritesAction.pending" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Loading,
    };

    const result = offersData.reducer(undefined, fetchFavoritesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" with "fakePreviewOffer" and "fetchingFavoritesStatus" to "Success" with "fetchFavoritesAction.fulfilled" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [fakePreviewOffer],
      fetchingFavoritesStatus: Status.Success,
    };

    const result = offersData.reducer(undefined, fetchFavoritesAction.fulfilled(
      [fakePreviewOffer], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should update favorites if the status = 1 with "postFavoriteStatusAction.fulfilled" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [fakeFavoritePreviewOffer],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(undefined, postFavoriteStatusAction.fulfilled(
      fakeFavoritePreviewOffer, '', fakeFavorite)
    );

    expect(result).toEqual(expectedState);
  });

  it('should delete offer from favorites if the status = 0 with "postFavoriteStatusAction.fulfilled" action', () => {
    const initialState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [fakeFavoritePreviewOffer],
      fetchingFavoritesStatus: Status.Idle,
    };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offers: [],
      favorites: [],
      fetchingFavoritesStatus: Status.Idle,
    };

    const result = offersData.reducer(initialState, postFavoriteStatusAction.fulfilled(
      noFavoriteOffer, '', fakeNotFavorite)
    );

    expect(result).toEqual(expectedState);
  });
});
