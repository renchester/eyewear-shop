const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
});

const formatPrice = (number) => formatter.format(number);

export default formatPrice;
