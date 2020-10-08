const colors = ["violet","indigo","blue","green","yellow","orange","red"];
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {

    const randomNumber = Math.floor(Math.random()* colors.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


btn2.addEventListener("click", function () {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#'+ randomColor;
    color.textContent = randomColor;
});