const imageArr = [
  "bird.avif",
  "buildings.avif",
  "developer.avif",
  "dog.avif",
  "iphone.avif",
  "lilac.avif",
  "museum.avif",
  "photographer.avif",
  "rainbow.avif",
  "road.avif",
  "train.avif",
];
const numberInput = document.getElementById("number-input");
const submitBtn = document.getElementById("submit-btn");
const photo = document.getElementById("photo");
const form = document.getElementById("form");

const SelectImage = () => {
  console.log(numberInput.value);
  
  let inputValue = numberInput.value;
  console.log(`${imageArr[inputValue]}`);
  photo.src = `./images/${imageArr[inputValue]}`;
};

submitBtn.addEventListener("click", SelectImage);
