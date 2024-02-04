import { Status } from '../../const';
import { fakeFavorite, fakeFavoriteOffer, fakeId, fakePreviewOffer, fakeOffer, fakeFavoritePreviewOffer } from '../../utils/mocks';
import { fetchNearPlacesAction, fetchOfferAction, postFavoriteStatusAction } from '../api-actions';
import { dropOffer, offerData } from './offer-data';

describe('OfferData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should reset offer and nearPlaces with "dropOffer" action', () => {
    const initialState = {
      fetchingStatus: Status.Idle,
      offer: fakeOffer,
      nearPlaces: [fakePreviewOffer],
      fetchingNearPlacesStatus: Status.Idle
    };

    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(initialState, dropOffer);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Loading" with "fetchOfferAction.pending" action', () => {
    const expectedState = {
      fetchingStatus: Status.Loading,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(undefined, fetchOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" with "fakeOffer" and "fetchingStatus" to "Success" with "fetchOfferAction.fulfilled" action', () => {
    const expectedState = {
      fetchingStatus: Status.Success,
      offer: fakeOffer,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(undefined, fetchOfferAction.fulfilled(
      fakeOffer, '', fakeId)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Error" with "fetchOfferAction.rejected" action', () => {
    const expectedState = {
      fetchingStatus: Status.Error,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(undefined, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingNearPlacesStatus" to "Loading" with "fetchNearPlacesAction.pending" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Loading
    };

    const result = offerData.reducer(undefined, fetchNearPlacesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearPlaces" with "fakePreviewOffer" and "fetchingNearPlacesStatus" to "Success" with "fetchNearPlacesAction.fulfilled" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [fakePreviewOffer],
      fetchingNearPlacesStatus: Status.Success
    };

    const result = offerData.reducer(undefined, fetchNearPlacesAction.fulfilled(
      [fakePreviewOffer], '', fakeId)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingNearPlacesStatus" to "Error" with "fetchNearPlacesAction.rejected" action', () => {
    const expectedState = {
      fetchingStatus: Status.Idle,
      offer: null,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Error
    };

    const result = offerData.reducer(undefined, fetchNearPlacesAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavorite" with "true" and "fetchingNearPlacesStatus" to "Success" with "postFavoriteStatusAction.fulfilled" action', () => {
    const initialState = {
      fetchingStatus: Status.Idle,
      offer: fakeFavoriteOffer,
      nearPlaces: [],
      fetchingNearPlacesStatus: Status.Idle
    };

    const result = offerData.reducer(initialState, postFavoriteStatusAction.fulfilled(
      fakeFavoritePreviewOffer, '', fakeFavorite)
    );

    expect(result.offer?.isFavorite).toBe(true);
  });
});
