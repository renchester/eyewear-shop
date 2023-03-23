/**
 *
 * @param {string} String in price format '$100,000.50' with currency sign at start of string
 * @returns {Number} the parsed number from that string 100000.5
 */

const parsePrice = (string) =>
  Number.parseFloat(string.trim().slice(1).split(',').join(''));

export default parsePrice;
