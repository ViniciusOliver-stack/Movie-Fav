// const tmdb = async(titleMovie) =>{
//   const moviePoster = document.querySelector('#app .poster')
//   const description = document.querySelector('#app .description')
//   const title = document.querySelector('#app .title')
//   const keyAPI = `60a04f8bb44ec00c6b62f3a5f949ffb1`
//   const APIResponse = `
//   https://api.themoviedb.org/3/discover/movie?api_key=${keyAPI}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2023&with_genres=${28}&`

//   await fetch(APIResponse)
//   .then(data => data.json())
//   .then(resp => {
//     console.log(resp)
//     let {length} = resp.genres
//     for(let i = 0; i <= length; i++){
//       const genresTitle = resp.genres[i].name
//       console.log(genresTitle)
//     }
//   })
// }

// tmdb('')

const keyAPI = `60a04f8bb44ec00c6b62f3a5f949ffb1`

let btnContainer = document.querySelector('.nav_wrapper')
let btns = btnContainer.querySelectorAll('.link_nav')
let popularSwiper = document.querySelector('.destaque_swiper .swiper-wrapper')
let section = document.querySelector('section')

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}

const PopularTMDB = async () => {
  const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${keyAPI}&language=pt-BR&page=1`

  await fetch(endPoint)
    .then(data => data.json())
    .then(resp => {
      let resultPopular = resp.results.length
      for (let i = 0; i <= resultPopular; i++) {
        const div = createPopular()
        div.querySelector(
          'img'
        ).src = `https://image.tmdb.org/t/p/w500/${resp.results[i].poster_path}`
        div.querySelector(
          '.swiper_content_title span'
        ).textContent = `${resp.results[i].title}`

        popularSwiper.append(div)

        new Swiper('.destaque_swiper', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        })
      }
    })
}

PopularTMDB()

function createPopular() {
  const div = document.createElement('div')
  div.className = 'swiper-slide'
  div.innerHTML = `
    <img src="https://m.media-amazon.com/images/S/pv-target-images/48a1d77ee964a0503c1330a99019296d3cbe500ef099eca34fdc989915b6cb65.jpg" alt="" class="destaque_img">
    <div class="swiper_contents">
    <div class="swiper_content_title">
      <span>The Boys</span>
    </div>
    <div class="swiper_content_buttons">
      <button class="btn_watchlist">+ Add List</button>
      <button class="btn_moreinfo">More Info</button>
    </div>
    </div>
  `

  return div
}

function createSection() {
  const div = document.createElement('div')
  div.innerHTML = `
  <p class="title">Terror</p>
  <div class="swiper section_swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://m.media-amazon.com/images/S/pv-target-images/48a1d77ee964a0503c1330a99019296d3cbe500ef099eca34fdc989915b6cb65.jpg"
          alt="" class="destaque_img">
        <div class="swiper_content_buttons">
          <button class="btn_watchlist">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button class="btn_moreinfo">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  `

  new Swiper(".section_swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  return div
}

document.querySelector('section').append(createSection())

async function getGenresMovies() {

  const APIResponse = `https://api.themoviedb.org/3/genre/movie/list?api_key=${keyAPI}&language=pt-BR`

  await fetch(APIResponse)
    .then(data => data.json())
    .then(resp => {
      console.log(resp)
      const { length } = resp.genres
      for (let i = 0; i <= length; i++) {
        const div = createSection()
        const genresID = resp.genres[i].id
        const genresTitle = resp.genres[i].name

        div.querySelector('.title').textContent = genresTitle

        console.log(genresID)

        section.append(div)
      }
    })
}

getGenresMovies()
