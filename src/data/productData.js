// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import framesData from './json/framesProductData.json';
import sunniesData from './json/sunniesProductData.json';

function getImgUrl(fileName, type, isMain) {
  const ext = 'jpg';
  const subfolder = type === 'sunnies' ? 'sunniesImages' : 'framesImages';
  const number = isMain ? '1' : '2';

  const imgURL = new URL(
    `../assets/img/${subfolder}/${fileName}-${number}.${ext}`,
    import.meta.url,
  ).href;

  return imgURL;
}

function mapImage(item) {
  const fileName = item.title.toLowerCase().split(' ').join('-');

  return {
    ...item,
    id: nanoid(),
    images: {
      main: getImgUrl(fileName, item.type, true),
      mainid: nanoid(),
      side: getImgUrl(fileName, item.type, false),
      sideid: nanoid(),
    },
  };
}

export const eyeglassesData = framesData.map((item) =>
  Object.freeze(mapImage(item)),
);

export const sunglassesData = sunniesData.map((item) =>
  Object.freeze(mapImage(item)),
);

export const allProductsData = [...eyeglassesData, ...sunglassesData];
