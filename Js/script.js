let i = 0  //current slide
let j = 3  //total slide
let dots = document.querySelectorAll('.dot-container button');
let image = document.querySelectorAll('.img-container img');
function next(){
    document.getElementById("content" + (i+1)).classList.remove('active');
    i=(j+i+1)%j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1)
}
function prev(){
    document.getElementById("content" + (i+1)).classList.remove('active');
    i=(j+i-1)%j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1)
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";});
 document.querySelector(".dot-container button:nth-child("+num+")").style.backgroundColor='#8052ec';

}

function dot(index){
    image.forEach(
        function(image){
            image.classList.remove('active')
        }
    );
    document.getElementById('content' + index).classList.add('active');
    i= i-1;
    indicator(index);

}

