const wStroke = document.getElementById('wStroke');
console.log(wStroke);
const wLogo= document.getElementById('wLogo');
console.log(wLogo);
function draw(){
    wStroke.classList.add("pen");
    setTimeout(function(){
        wStroke.classList.remove("pen");
    },2000)

};
/*Animated SVG beating heart*/
const heart = document.getElementById('heart');
console.log(heart);
const hand= document.getElementById('hand');
console.log(hand);
function beat(){
    if (!heart.classList.contains("redHeart")){
        heart.classList.add("redHeart");
        setTimeout(function(){
            heart.classList.remove("redHeart");
        },4000)
    }else{return}
    
};

const heartShape = document.getElementById('heartShape');
console.log(hand);
function morph(){
    if (!heartShape.classList.contains("heart-shape")){
        heartShape.classList.add("heart-shape");
    }else{return}
    
};
heartShape.addEventListener("mouseleave",function(){
    setTimeout(function(){
        if (heartShape.classList.contains("heart-shape")){
            heartShape.classList.remove("heart-shape");
        }else{return}
    },1000)
    
});


