// const tmdb = async(titleMovie) =>{
//   const moviePoster = document.querySelector('#app .poster')
//   const description = document.querySelector('#app .description')
//   const title = document.querySelector('#app .title')
//   const keyAPI = `60a04f8bb44ec00c6b62f3a5f949ffb1`
//   const APIResponse = `https://api.themoviedb.org/3/movie/popular?api_key=${keyAPI}&language=pt-BR&page=1`

//   await fetch(APIResponse)
//   .then(data => data.json())
//   .then(resp => {
//     console.log(resp)
//     moviePoster.src = `https://image.tmdb.org/t/p/w500/${resp.results[1].poster_path}`
//     title.textContent = `${resp.results[1].original_name}`
//     description.textContent = `${resp.results[1].overview}`
//   })
// }

// tmdb('') 
import {MoviesFav} from './MoviesFav.js'

new MoviesFav('#app')

var btnContainer = document.querySelector(".nav_wrapper");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.querySelectorAll('.link_nav');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}