const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100"); //enables asynchronous communication w/Imgflip API
    const images = await res.json(); //parse captured data 
    //console.log(images); //test for pulling images array
    selectRandomImage(images);
};

//calls getImage() function
//getImage(); //cut & moved to Event Listener for button


const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex); //test for pulling random whole number between 0 & 99
    const randomImage = images[randomIndex]; //grabs single random image from images array
    //console.log(randomImage); //test for pulling a single random image object
    displayImage(randomImage);
};

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImage();
});
