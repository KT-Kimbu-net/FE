const imageFiles = [
  "/img/Quiz/1.jpg",
  "/img/Quiz/2.jpg",
  "/img/Quiz/3.jpg",
  "/img/Quiz/4.jpg",
  "/img/Quiz/5.jpg",
  "/img/Quiz/6.jpg",
  "/img/Quiz/7.jpg",
  "/img/Quiz/8.jpg",
  "/img/Quiz/9.jpg",
  "/img/Quiz/10.jpg",
  "/img/Quiz/11.jpg",
  "/img/Quiz/12.jpg",
  "/img/Quiz/13.jpg",
  "/img/Quiz/14.jpg",
  "/img/Quiz/15.jpg",
  "/img/Quiz/16.jpg",
  "/img/Quiz/17.jpg",
];

export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * imageFiles.length);
  return imageFiles[randomIndex];
}
