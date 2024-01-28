import {PreviewOfferType, TypeState} from '../../types/types';
import {CityName, NameSpace, Status} from '../../const';
import { getActiveCity } from '../app-process/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getOffers = (state: TypeState): PreviewOfferType[] => (
  state[NameSpace.Offers].offers
);

export const getOffersStatus = (state: TypeState): Status => (
  state[NameSpace.Offers].fetchingStatus
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: PreviewOfferType[], activeCity: string | CityName): PreviewOfferType[] => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getFavoritesOffers = (state: TypeState): PreviewOfferType[] => state[NameSpace.Offers].favorites;

export const getFavoritesStatus = (state: TypeState): Status => state[NameSpace.Offers].fetchingFavoritesStatus;
