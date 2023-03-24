import formatTitle from './formatTitle';

const searchForMatch = (string, array) => {
  const formattedQuery = formatTitle(string);

  return array.filter((item) =>
    formatTitle(item.title).includes(formattedQuery),
  );
};

export default searchForMatch;
