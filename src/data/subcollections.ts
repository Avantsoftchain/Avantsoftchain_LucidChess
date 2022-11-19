import { Prisma } from '@prisma/client';

export const subCollections: Prisma.SubCollectionCreateManyInput[] = [
  { id: 1, title: 'Sneakers', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 2, title: 'Running', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 3, title: 'Sandals & Slides', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 4, title: 'Outdoor & Hiking', type: ['MEN', 'WOMEN'], collectionId: 1 },
  {
    id: 5,
    title: 'Shoes $100 & Under',
    type: ['MEN', 'WOMEN'],
    collectionId: 1,
  },
  { id: 6, title: 'Soccer', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 7, title: 'Basketball', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 8, title: 'Golf', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 9, title: 'Workout & Gym', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 10, title: 'Football', type: ['MEN'], collectionId: 1 },
  { id: 11, title: 'Mountain Biking', type: ['MEN', 'WOMEN'], collectionId: 1 },
  { id: 12, title: 'Baseball', type: ['MEN'], collectionId: 1 },
  { id: 13, title: 'Platfom Shoes', type: ['WOMEN'], collectionId: 1 },
  { id: 14, title: 'Tennis', type: ['WOMEN'], collectionId: 1 },
  { id: 15, title: 'Softball', type: ['WOMEN'], collectionId: 1 },
  { id: 16, title: 'Volleyball', type: ['WOMEN'], collectionId: 1 },
  { id: 17, title: 'T-Shirts & Tops', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 18, title: 'Shorts', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 19, title: 'Pants', type: ['MEN', 'WOMEN'], collectionId: 2 },
  {
    id: 20,
    title: 'Hoodies & Sweatshirts',
    type: ['MEN', 'WOMEN'],
    collectionId: 2,
  },
  { id: 21, title: 'Tracksuits', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 22, title: 'Swim', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 23, title: 'Jerseys', type: ['MEN'], collectionId: 2 },
  { id: 24, title: 'Jackets', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 25, title: 'Matching Sets', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 26, title: 'Matching Sets', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 27, title: 'Socks', type: ['MEN', 'WOMEN'], collectionId: 2 },
  { id: 28, title: 'Underwear', type: ['MEN'], collectionId: 2 },
  { id: 29, title: 'Big & Tall', type: ['MEN'], collectionId: 2 },
  { id: 30, title: 'Sports Bras', type: ['WOMEN'], collectionId: 2 },
  { id: 31, title: 'Plus Sizes', type: ['WOMEN'], collectionId: 2 },
  { id: 32, title: 'Tights & Leggings', type: ['WOMEN'], collectionId: 2 },
  { id: 33, title: 'Dresses & Skirts', type: ['WOMEN'], collectionId: 2 },
  { id: 34, title: 'Maternity', type: ['WOMEN'], collectionId: 2 },
  {
    id: 35,
    title: 'Bags & Backpacks',
    type: ['MEN', 'WOMEN'],
    collectionId: 3,
  },
  { id: 36, title: 'Balls', type: ['MEN', 'WOMEN'], collectionId: 3 },
  { id: 37, title: 'Gloves', type: ['MEN', 'WOMEN'], collectionId: 3 },
  { id: 38, title: 'Hats & Beanies', type: ['MEN'], collectionId: 3 },
  { id: 39, title: 'Hats & Headbands', type: ['WOMEN'], collectionId: 3 },
  { id: 40, title: 'Headphones', type: ['MEN', 'WOMEN'], collectionId: 3 },
  { id: 41, title: 'Water Bottles', type: ['MEN', 'WOMEN'], collectionId: 3 },
  {
    id: 42,
    title: 'Backpacks Under $50',
    type: ['MEN', 'WOMEN'],
    collectionId: 3,
  },
  { id: 43, title: 'Baseball', type: ['MEN'], collectionId: 4 },
  { id: 44, title: 'Basketball', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 45, title: 'Cycling', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 46, title: 'Football', type: ['MEN'], collectionId: 4 },
  { id: 47, title: 'Golf', type: ['MEN', 'WOMEN'], collectionId: 4 },
  {
    id: 48,
    title: 'Hiking & Outdoor',
    type: ['MEN', 'WOMEN'],
    collectionId: 4,
  },
  { id: 49, title: 'Hockey', type: ['MEN'], collectionId: 4 },
  { id: 50, title: 'Running', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 51, title: 'Soccer', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 52, title: 'Softball', type: ['WOMEN'], collectionId: 4 },
  { id: 53, title: 'Swim', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 54, title: 'Tennis', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 55, title: 'Volleyball', type: ['WOMEN'], collectionId: 4 },
  { id: 56, title: 'Workout & Gym', type: ['MEN', 'WOMEN'], collectionId: 4 },
  { id: 57, title: 'Yoga', type: ['MEN', 'WOMEN'], collectionId: 4 },
  {
    id: 58,
    title: 'adicolor Clothing',
    type: ['MEN', 'WOMEN'],
    collectionId: 5,
  },
  { id: 59, title: 'adilette', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 60, title: 'FIFA World Cup', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 61, title: 'Five Ten', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 62, title: 'Forum', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 63, title: 'IVY PARK', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 64, title: 'Nizza', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 65, title: 'Originalz', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 66, title: 'OZ', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 67, title: 'Stella McCartney', type: ['WOMEN'], collectionId: 5 },
  { id: 68, title: 'Sportswear', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 69, title: 'TERREX', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 70, title: 'Ultraboost', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 71, title: 'Y-3', type: ['MEN', 'WOMEN'], collectionId: 5 },
  { id: 72, title: 'YEZZY', type: ['MEN', 'WOMEN'], collectionId: 5 },
];
