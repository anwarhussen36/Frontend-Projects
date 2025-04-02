var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 

var image1=document.querySelector('.img1');
var image2=document.querySelector('.img2');
var h1=document.querySelector('.container h1');

image1.setAttribute('src', randomDiceImage1);
image2.setAttribute('src', randomDiceImage2);

if(randomNumber1>randomDiceImage2){
    h1.innerHTML="player1 win!";
}
else if(randomNumber1<randomNumber2){
    h1.innerHTML="player2 win!";

}
else{
    h1.innerHTML="Draw again!";
}