// export const framesProducts = framesData.map((item) => ({
// ...item,
// images: {
// mainProfile: framesGallery.find((url) => {
// const splitURL = url.split('/');

// return (
// splitURL[splitURL.length - 1] ===
// `${item.title.toLowerCase().split(' ').join('-')}-1.jpg`
// );
// }),
// sideProfile: framesGallery.find((url) => {
// const splitURL = url.split('/');

// return (
// splitURL[splitURL.length - 1] ===
// `${item.title.toLowerCase().split(' ').join('-')}-2.jpg`
// );
// }),
// },
// }));

// export const sunniesProducts = sunniesData.map((item) => ({
// ...item,
// images: {
// mainProfile: `../assets/img/sunniesImages/${item.title
//       .toLowerCase()
//       .split(' ')
//       .join('-')}-1.jpg`,
// sideProfile: `../assets/img/sunniesImages/${item.title
//       .toLowerCase()
//       .split(' ')
//       .join('-')}-2.jpg`,
// },
// }));

// export const allProducts = [...framesProducts, ...sunniesProducts];

// {
// url: '',
// title: '',
// collection: '',
// price: 0,
// type: '',
// discountedPrice: 0,
// description: '',
// technicalDetails: [''],
// color: '',
// quantity: 1,
// onSale: false,
// images: {
// mainProfile: '',
// sideProfile: '',
// },
// },

// framesImages[
// `../assets/img/framesImages/${item.title
//     .toLowerCase()
//     .split(' ')
//     .join('-')}-1.jpg`
// ](),

// export const framesGallery = Object.values(
// import.meta.glob('../../public/framesImages/\*.{png,jpg,jpeg,PNG,JPEG}', {
// eager: true,
// as: 'url',
// }),
// );

// for (const path in framesImages) {
// if (Object.prototype.hasOwnProperty.call(framesImages, path)) {
// const p = new URL(path, import.meta.url).href;
// framesGallery.push(p);
// }
// }

// export const sunniesGallery = Object.values(
// import.meta.glob('../../public/sunniesImages/\*.{png,jpg,jpeg,PNG,JPEG}', {
// eager: true,
// as: 'url',
// }),
// );

// for (const path in sunniesImages) {
// if (Object.prototype.hasOwnProperty.call(sunniesImages, path)) {
// const p = new URL(path, import.meta.url).href;
// sunniesGallery.push(p);
// }
// }
