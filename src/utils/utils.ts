import { SortOption } from '../const';
import { PreviewOfferType, ReviewType } from '../types/types';

function sortByOption (offers: PreviewOfferType[], activeSortedType: string) {
  switch (activeSortedType) {
    case SortOption.Popular:
      return offers;
    case SortOption.PriceLowToHigh:
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.PriceHighToLow:
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      throw new Error(`Unknown activeSortType: ${activeSortedType}`);
  }
}

function getRatingWidth(rating:ReviewType['rating']):number {
  return Math.round(rating) * 20;
}

function getPluralEnding(length: number) {
  return length > 1 ? 's' : '';
}

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {sortByOption, getRatingWidth, getPluralEnding, capitalize, getRandomInt};
