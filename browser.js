const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            nav.classList.add('nav__black');
        } else {
            nav.classList.remove('nav__black');
        }
        });

let row_poster = document.getElementsByClassName('row__poster');
let hidden = document.getElementsByClassName('hidden');
for(let i=0; i < row_poster.length; i++){
    row_poster[i].onclick = function pop (){
        if(hidden[i].style.display == "block"){
            hidden[i].style.display = "none";
        }
        else{
            hidden[i].style.display = "block";
        }
    }
}
var video = document.querySelector('.popup');
function play_vid(){
    if(video.style.display == "block"){
        video.style.display = "none";
    }
    else{
        video.style.display = "flex";
    }
};

document.addEventListener('mouseup', function(e){
    if (e.target != video){
        video.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
})

var movie = document.querySelector('.movie');
console.log(movie);
var shows = document.querySelector('.shows');
console.log(shows);

movie.onclick = function (){
    movie.style.fontWeight = "bold";
    shows.style.fontWeight = "100";
};

shows.onclick = function(){
    shows.style.fontWeight = "bold";
    movie.style.fontWeight = "100";
}
