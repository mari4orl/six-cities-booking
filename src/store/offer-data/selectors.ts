import { PreviewOfferType, TypeState } from '../../types/types';
import { NameSpace, Status } from '../../const';
import { createSelector } from '@reduxjs/toolkit';

export const getOffer = createSelector(
  (state: TypeState) => state[NameSpace.Offer],
  (state) => state.offer
);

export const getOfferStatus = (state: TypeState): Status =>
  state[NameSpace.Offer].fetchingStatus;

export const getNearPlaces = (state: TypeState): PreviewOfferType[] =>
  state[NameSpace.Offer].nearPlaces;
