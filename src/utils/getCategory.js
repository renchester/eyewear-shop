const getCategory = (string) => {
  let type;

  if (string === 'sunnies') type = 'sunglasses';
  if (string === 'frames') type = 'eyeglasses';

  return type;
};

export default getCategory;
