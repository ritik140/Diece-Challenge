var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randmdicesource = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randmdicesource)
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "1st players wins!";

}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "2nd Players wins!";

} else {
    document.querySelector("h1").innerHTML = "DRAW";
}