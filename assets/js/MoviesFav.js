// export class Movies{
//   constructor(root){
//     this.root = document.querySelector(root)
   
//   }

// }

// export class MoviesFav extends Movies{
//   constructor(root){
//     super(root)

//     this.update()
//   }

//   update(){
//     this.funcaoCriaDestaques()
//     // this.funcaoCriarMinhaLista()
//   }

//   funcaoCriaDestaques(){
//     this.destaque = document.querySelector('.destaque_swiper .swiper-wrapper')

//     this.entries.forEach(movie =>{
//       const div = this.createDestaques()

//       new Swiper(".destaque_swiper", {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         loop: true,
//         centeredSlides: true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//           },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
  
      
//       div.querySelector('img').src = `${movie.banner}`
//       div.querySelector('.swiper_content_title span').innerHTML = `${movie.nameMovie}`

//       this.destaque.append(div)
//     })
//   }

//   // funcaoCriarMinhaLista(){
//   //   this.minhaLista = document.querySelector('.my_list .swiper-wrapper')

//   //   this.myList.forEach(movies => {
//   //     const div = this.createMinhaLista()

//   //     new Swiper(".my_list", {
//   //       spaceBetween: 30,
//   //       loop: true,
//   //       centeredSlides: true,
//   //       pagination: {
//   //         el: ".swiper-pagination",
//   //         clickable: true,
//   //       },
//   //       breakpoints: {
//   //           640: {
//   //             slidesPerView: 1,
//   //             spaceBetween: 10,
//   //           },
//   //           768: {
//   //             slidesPerView: 2,
//   //             spaceBetween: 20,
//   //           },
//   //           1024: {
//   //             slidesPerView: 3,
//   //             spaceBetween: 50,
//   //           },
//   //         },
//   //     });

//   //     div.querySelector('img').src = `${movies.banner}`

//   //     this.minhaLista.append(div)
//   //   })
//   // }
//   createDestaques(){
//     const div = document.createElement('div')
//     div.className = 'swiper-slide'
//     div.innerHTML = `
//       <img src="https://m.media-amazon.com/images/S/pv-target-images/48a1d77ee964a0503c1330a99019296d3cbe500ef099eca34fdc989915b6cb65.jpg" alt="" class="destaque_img">
//       <div class="swiper_contents">
//         <div class="swiper_content_title">
//           <span>The Boys</span>
//         </div>
//         <div class="swiper_content_buttons">
//           <button class="btn_watchlist">+ Watchlist</button>
//           <button class="btn_moreinfo">i More info</button>
//         </div>
//       </div>
//     `

//     return div
//   }


//   createMinhaLista(){
//     const divMinhaLista = document.createElement('div')
//     divMinhaLista.className = 'swiper-slide'
//     divMinhaLista.innerHTML = `
//     <img src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/08/19/a_casa_do_dragao_game_of_thrones_hbo_max-21583460.jpg" alt="">
//     `

//     return divMinhaLista
//   }
// }