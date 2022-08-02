//E_Korbi
'use strict';
const btn = document.getElementById('discover');
btn.addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/assets/ap_consumption/index.html");
});
``
const sub = document.getElementById('enroll');
sub.addEventListener('click', function () {
    document.querySelector(".popup").style.display = 'flex';
});
const close = document.getElementById('close');
close.addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
});

function validate(){
const userName = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
    if(userName.value == "admin" && email.value=="ekorbi@gmail.com" &&password.value == "ekorbi"){
        alert(`You are logged in as admin`);
    }else{
        alert('Error on login');
    }
}
var read = document.getElementById("read");
read.addEventListener('click', function () {
    window.open("https://en.wikipedia.org/wiki/National_Geographic_(American_TV_channel)");
});
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
function newImage() {
    image1.src = "./assets/images/img-hover1.jpg";
}
function oldImage() {
    image1.src="./assets/images/bg4.jpeg";
}
function newImage1() {
    image2.src = "./assets/images/image-hover.jpg";
}
function oldImage1() {
    image2.src="./assets/images/view.jpg";
}
function newImage2() {
    image3.src = "./assets/images/img-hover3.jpg";
}
function oldImage2() {
    image3.src="./assets/images/bg3.webp";
}
function newImage3() {
    image4.src = "./assets/images/img-hover4.jpg";
}
function oldImage3() {
    image4.src="./assets/images/builid.jpg";
}


