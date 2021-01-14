let IMAGES = [
  "./images/Akali.jpg",
  "./images/Annie.jpg",
  "./images/Arli.jpg",
  "./images/Ash.jpg",
  "./images/Caitlin.jpg",
  "./images/Fionna.jpg",
  "./images/Janna.jpg",
  "./images/Jinx.jpg",
  "./images/Lissandra.jpg",
  "./images/Lulu.jpg",
  "./images/Lux.jpg",
  "./images/Nami.jpg",
  "./images/Oriana.jpg",
  "./images/Riven.jpg",
  "./images/Riven-2.jpg",
]

let initialNum = 8;
let randomSize = [1, 2, 3, 4];

function getImageGenerator() {
  const source = IMAGES.slice();
  let initial = true;
  return () => {
    if (initial) {
      initial = false;
      return source.splice(0, initialNum);
    }
    const size = getRandomInt(0, randomSize.length - 1);
    return source.splice(0, randomSize[size]);
  } 
}
