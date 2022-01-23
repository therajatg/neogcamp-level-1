let child = document.querySelectorAll(".child");

function childZeroClicked(){
    child[0].style.backgroundColor = "lightblue"
    child[1].style.backgroundColor = "white"
    child[2].style.backgroundColor = "white"
    child[3].style.backgroundColor = "white"
}

function childOneClicked(){
    child[0].style.backgroundColor = "white"
    child[1].style.backgroundColor = "lightblue"
    child[2].style.backgroundColor = "white"
    child[3].style.backgroundColor = "white"
}

function childTwoClicked(){
    child[0].style.backgroundColor = "white"
    child[1].style.backgroundColor = "white"
    child[2].style.backgroundColor = "lightblue"
    child[3].style.backgroundColor = "white"
}

function childThreeClicked(){
    child[0].style.backgroundColor = "white"
    child[1].style.backgroundColor = "white"
    child[2].style.backgroundColor = "white"
    child[3].style.backgroundColor = "lightblue"
}



child[0].addEventListener("click", childZeroClicked);
child[1].addEventListener("click", childOneClicked);
child[2].addEventListener("click", childTwoClicked);
child[3].addEventListener("click", childThreeClicked);