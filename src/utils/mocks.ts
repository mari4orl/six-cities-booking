import { OfferType, PreviewOfferType } from '../types/types';
import {lorem} from 'faker';
import {getRandomInt} from './utils';

export const fakeId = '1';

function getFakeOffer(favorite: {favorite: boolean}): OfferType {
  return {
    bedrooms: getRandomInt(0, 20),
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      },
      name: 'Hamburg',
    },
    description: lorem.text(),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: fakeId,
    images: Array.from({length: getRandomInt(0, 20)}, (): string => `https://loremflickr.com/640/480/nature?${getRandomInt(1, 400)}`),
    isFavorite: (function () {
      if(favorite) {
        return true;
      }
      return !!getRandomInt(0, 1);
    })(),
    isPremium: !!getRandomInt(0, 1),
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    maxAdults: getRandomInt(0, 10),
    previewImage: `https://loremflickr.com/640/480/abstract?${getRandomInt(1, 400)}`,
    price: getRandomInt(100, 2000),
    rating: getRandomInt(0, 5),
    title: lorem.words(7),
    type: 'room',
  };
}

function getFakeNearPlaces(favorite: {favorite: boolean}): PreviewOfferType {
  return {
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      },
      name: 'Hamburg',
    },
    id: fakeId,
    isFavorite: (function () {
      if(favorite) {
        return true;
      }
      return !!getRandomInt(0, 1);
    })(),
    isPremium: !!getRandomInt(0, 1),
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    previewImage: `https://loremflickr.com/640/480/abstract?${getRandomInt(1, 400)}`,
    price: getRandomInt(100, 2000),
    rating: getRandomInt(0, 5),
    title: lorem.words(7),
    type: 'room',
  };
}

export const fakeFavorite = {
  id: fakeId,
  status: 1,
};

export const fakeOffer = getFakeOffer({favorite: false});
export const fakeNearPlaces = getFakeNearPlaces({favorite: false});
export const fakeFavoriteOffer = getFakeOffer({favorite: true});
