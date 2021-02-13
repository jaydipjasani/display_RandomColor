const colors = ["red","blue","pink","gray"];

function changeColor(){
    color = setInterval(randomColor,500);
}


function randomColor(){
    randomColor = Math.floor(Math.random(colors)*colors.length);
    document.body.style.backgroundColor = colors[randomColor];
}

