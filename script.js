// DOM Document Object Model 

/*Abre e fecha o menu quando clicar no ícone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show') 
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* mudar o header quando der scroll */



const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

//Testimonial sliders

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            767: {
                slidesPerView: 2,
                setWrapperSize: true,
            }
        }
  })

  /* SCROLL REVEAL================ SHOW ELEMENTS WHEN U SCROLL*/
  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })
  
  scrollReveal.reveal( 
      `#home .img, #home .text,
      #about .img, #about .text, #about .text p
      #services header, #services .card,
      #testimonials header, #testimonials .testimonials,
      #contact .text, #contact .links,
      footer .brand, footer .social
      `, {interval: 100})

      /*====== BOTTOM BACK TO TOP ======*/

      const backToTopButton = document.querySelector('.back-to-top')

      function backToTop(){
        if(this.window.scrollY >= 560) {
            backToTopButton.classList.add('show')
        } else {
            backToTopButton.classList.remove('show')
        }
      }

    /* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
    function activateMenuAtCurrentSection() {

        const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4

        for(const section of sections) {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            const sectionId = section.getAttribute('id')

            const checkpointStart = checkpoint >= sectionTop 
            const checkpointEnd = checkpoint <= sectionTop + sectionHeight

            if(checkpointStart && checkpointEnd) {
                document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
            } else {
                document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
            }
        }
}

/* ======== WHEN SCROLL ====== */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

    