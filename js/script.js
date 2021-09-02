const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//declares getImage with Async Function
const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100"); //enables asynchronous communication w/Imgflip API
    const images = await res.json(); //parse captured data 
    console.log(images);
};

//calls getImage() function
getImage();
