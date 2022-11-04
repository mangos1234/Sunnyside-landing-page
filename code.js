var m = document.querySelector(".container ul");

var menuToggle = false;

function openMenu(){
    if(menuToggle === false){
       m.style.display = "flex"; 
       menuToggle = true;
    }
    else{
        m.style.display = "none";
        menuToggle = false;
    }   
}



