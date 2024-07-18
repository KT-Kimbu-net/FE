const imageFiles = [
  "/img/Quiz/1.jpg",
  "/img/Quiz/2.jpg",
  "/img/Quiz/3.jpg",
  "/img/Quiz/4.jpg",
  "/img/Quiz/5.jpg",
];

export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * imageFiles.length);
  return imageFiles[randomIndex];
}
