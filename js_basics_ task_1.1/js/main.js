
/* task1 */
/* js */
const blackSquare = document.getElementById("blackSquareJs");
const removeButton = document.getElementById("removeButton");

removeButton.addEventListener('click', function () {
  if (blackSquare) {
    blackSquare.remove();
  }
});
/* js+css */
const square = document.getElementById("blackSquareJsCss");
const removeButton2 = document.getElementById("removeButton2");

removeButton2.addEventListener('click', function () {
  if (square) {
    square.classList.add('hidden');
  }
});

/* task 2 */
document.getElementById("hideShowBlock").addEventListener('click', function () {
  const block = document.getElementById("blackSquareBlock");
  const button = document.getElementById("hideShowBlock");

  if (block.classList.contains("hidden")) {

    block.classList.remove("hidden");
    button.textContent = "Hide Block";
    button.classList.remove("hidden-btn");
    button.classList.add("showing");
  } else {

    block.classList.add("hidden");
    button.textContent = "Show Block";
    button.classList.remove("showing");
    button.classList.add("hidden-btn");
  }
});
/* task 3 */
let isHidden = false;
document.getElementById('hideSquares').addEventListener('click', function () {
  const container = document.getElementById('squaresContainer');
  const buttonHiden = document.getElementById('hideSquares');
  isHidden = !isHidden;
  for (let i = 0; i < container.children.length; i++) {
    if (isHidden) {
      container.children[i].style.display = 'none';
      buttonHiden.classList.add("showing");
      buttonHiden.textContent = "Show";
    } else {
      container.children[i].style.display = 'block';
      buttonHiden.textContent = "Hide";


    }
  }
});
/* task 4 */
document.getElementById('visiability').addEventListener('click', function () {
  const selector = document.getElementById('cssSelector').value;
  const elements = document.querySelectorAll(selector);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
});
/* task 5 */
const yellowSquare = document.getElementById('yellowSquare');
let isFirstClick = true;

yellowSquare.addEventListener('click', function () {
  if (isFirstClick) {
    alert('Привіт');
    isFirstClick = false;
  } else {
    yellowSquare.style.display = 'none';
  }
});
/* task 6 */
const hoverButtonRed = document.getElementById('hoverButton');
const redSquare = document.getElementById('redSquare');

hoverButtonRed.addEventListener('mouseenter', function () {
  redSquare.style.display = 'block';
});
hoverButtonRed.addEventListener('mouseleave', function () {
  redSquare.style.display = 'none';
});
/* task 7 */
const inputField = document.getElementById('inputField');
const greenRectangle = document.getElementById('greenRec');

inputField.addEventListener('mouseenter', function () {
  greenRectangle.style.display = 'block';
});

inputField.addEventListener('input', function () {
  greenRectangle.style.display = 'none';
});
/* task 8 */

const loadImageButton = document.getElementById('loadImageButton');
const imageUrlInput = document.getElementById('imageUrl');
const imageContainer = document.getElementById('imageContainer');

loadImageButton.addEventListener('click', function () {
  const imageUrl = imageUrlInput.value.trim();
  if (imageUrl) {
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image" onerror="alert('Image failed to load. Please check the URL.')">`;
  } else {
    alert('Please enter a valid image URL');
  }
});

/*task 9 */
const loadImagesButtonT = document.getElementById('loadImagesButtonT');
const imageUrlsInputT = document.getElementById('imageUrlsT');
const imageContainerTextarea = document.getElementById('imageContainerT');

loadImagesButtonT.addEventListener('click', function () {
  const urls = imageUrlsInputT.value.split('\n');
  imageContainerTextarea.innerHTML = '';

  for (let i = 0; i < urls.length; i++) {
    const img = document.createElement('img');
    img.src = urls[i].trim();
    imageContainerTextarea.appendChild(img);
  }
});
/* task 10 */
const coordinatesContainer = document.getElementById('coordinates-block');

document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;
  coordinatesContainer.textContent = `X: ${x}, Y: ${y}`;
});
/* task 11 */
const languageBlock = document.getElementById('language-block');
const browserLanguage = navigator.language;
languageBlock.textContent = `Language: ${browserLanguage}`;
/* task 12 */
const positionBlock = document.getElementById('location-block');
const isGeolocationSupported = !!navigator.geolocation; // Перевірка підтримки геолокації

if (isGeolocationSupported) {
  navigator.geolocation.getCurrentPosition(displayLocation);
} else {
  positionBlock.textContent = 'Geolocation is not supported by your browser.';
}
function displayLocation(location) {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  positionBlock.textContent = `Ш: ${latitude}, Д: ${longitude};`

}
/* task 13 */
const localEditable = document.getElementById('local-editable');
const cookiesEditable = document.getElementById('cookies-editable');
const sessionEditable = document.getElementById('session-editable');

window.onload = () => {
  // localStorage
  localEditable.textContent = localStorage.getItem('localStorageText') || 'LS';
  localEditable.addEventListener('input', () => {
    localStorage.setItem('localStorageText', localEditable.textContent);
  });

  // cookies
  cookiesEditable.textContent = document.cookie.split('=')[1] || 'CS';

  cookiesEditable.addEventListener('input', () => {
    document.cookie = `cookiesText=${cookiesEditable.textContent}; max-age=86400; path=/`; // Save text 1 day
  });

  // sessionStorage
  sessionEditable.textContent = sessionStorage.getItem('sessionStorageText') || 'SS';
  sessionEditable.addEventListener('input', () => {
    sessionStorage.setItem('sessionStorageText', sessionEditable.textContent);
  });

};

/* task 14 */
const scrollButton = document.getElementById("scrollButton");
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/*  task 15 */
document.getElementById("blockOut").addEventListener("click", function () {
  alert("Hello, I'm big block 😎");
});

document.getElementById("blockIn").addEventListener("click", function (event) {
  alert("Hi,I'm small block 👶");
  event.stopPropagation();
});
/* task 16 */

const graySq = document.getElementById('blure');
const buttonShowSq = document.getElementById('showBlure');

buttonShowSq.addEventListener('click', () => {
  graySq.style.display = 'block';
  document.body.classList.add('no-scroll');
});

graySq.addEventListener('click', () => {
  graySq.style.display = 'none';
  document.body.classList.remove('no-scroll');
});
/* task 17 */
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('🏖️');
});
/* task 18 */
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

// Handle drag-and-drop events
fileUpload.addEventListener('dragover', (event) => {
  event.preventDefault();
  fileUpload.classList.add('dragover');
});

fileUpload.addEventListener('dragleave', () => {
  fileUpload.classList.remove('dragover');
});

fileUpload.addEventListener('drop', (event) => {
  event.preventDefault();
  fileUpload.classList.remove('dragover');

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
});

// Handle file input click
fileUpload.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    handleFile(fileInput.files[0]);
  }
});

// Update UI with selected file details
function handleFile(file) {
  fileName.textContent = `Selected file: ${file.name}`;
}