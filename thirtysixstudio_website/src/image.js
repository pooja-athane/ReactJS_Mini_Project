const baseUrl = "https://thirtysixstudio.com/peppers/";
const categories = [
  "pepperA",
  "pepperB",
  "pepperC",
  "pepperD",
  "pepperE",
  "pepperF",
  "pepperG",
];

const images = [];

categories.forEach((category) => {
  for (let i = 0; i < 150; i++) {
    images.push(`${baseUrl}${category}/${i}.png`);
  }
});

export default images;