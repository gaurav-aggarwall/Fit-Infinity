// Slider
let larrow = document.getElementById("left-arrow"),
    rarrow = document.getElementById("right-arrow"),
    sliderImg = document.querySelectorAll(".slide"),
    current=0,
    time=5000;

function reset(){
    for(let i=0; i<sliderImg.length; i++){
        sliderImg[i].style.display='none';
    }
}

function startSlide(){
    reset();
    sliderImg[0].style.display='block';
}

function leftSlide(){
    reset();
    sliderImg[current-1].style.display='block';
    current--;
}

function rightSlide(){
    reset();
    sliderImg[current+1].style.display='block';
    current++;
}

larrow.addEventListener('click', function(){
    if(current===0){
        current=sliderImg.length;
    }
    leftSlide();
});

rarrow.addEventListener('click',rightCheck );

function rightCheck(){
    if(current===sliderImg.length-1){
        current=-1;
    }
    rightSlide();
}

startSlide();
setInterval(rightCheck,time);
