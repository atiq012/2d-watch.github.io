function dialChange(name){
    if(name == 'light-grey'){
        document.getElementById("front-img").src = "images/Protype-2.PNG";
        document.getElementById("back-img").src = "images/Protype-Back-2.PNG";
        document.getElementById("front-img").style.width = "90%";
        document.getElementById("back-img").style.width = "118%";
        document.getElementById("front-img").style.margin = "50px";
        document.getElementById("light-grey").style.border = "5px solid green";
        document.getElementById("grey").style.border = "none";
        document.getElementById("yellow").style.border = "none";
    }
    if(name == 'grey'){
        document.getElementById("front-img").src = "images/Protype-1.PNG";
        document.getElementById("back-img").src = "images/Protype-Back-1.PNG";
        document.getElementById("front-img").style.width = "105%";
        document.getElementById("back-img").style.width = "105%";
        document.getElementById("front-img").style.margin = "10px";
        document.getElementById("grey").style.border = "5px solid green";
        document.getElementById("light-grey").style.border = "none";
        document.getElementById("yellow").style.border = "none";
    }
    if(name == 'yellow'){
        document.getElementById("front-img").src = "images/Protype-3.PNG";
        document.getElementById("back-img").src = "images/Protype-Back-3.PNG";
        document.getElementById("front-img").style.width = "100%";
        document.getElementById("back-img").style.width = "105%";
        document.getElementById("front-img").style.margin = "15px";
        document.getElementById("yellow").style.border = "5px solid green";
        document.getElementById("light-grey").style.border = "none";
        document.getElementById("grey").style.border = "none";
    }
}

function bandChange(name){
    if(name == 'blue'){
        document.getElementById("front-img").style.backgroundColor = "#00B4FE";
        document.getElementById("back-img").style.backgroundColor = "#00B4FE";
        document.getElementById("blue-selected").style.border = "5px solid red";
        document.getElementById("black-selected").style.border = "none";
        document.getElementById("white-selected").style.border = "none";

    }
    if(name == 'black'){
        document.getElementById("front-img").style.backgroundColor = "#273137";
        document.getElementById("back-img").style.backgroundColor = "#273137";
        document.getElementById("black-selected").style.border = "5px solid red";
        document.getElementById("blue-selected").style.border = "none";
        document.getElementById("white-selected").style.border = "none";
    }
    if(name == 'white'){
        document.getElementById("front-img").style.backgroundColor = "#FFFFFF";
        document.getElementById("back-img").style.backgroundColor = "#FFFFFF";
        document.getElementById("white-selected").style.border = "5px solid red";
        document.getElementById("blue-selected").style.border = "none";
        document.getElementById("black-selected").style.border = "none";
    }
}