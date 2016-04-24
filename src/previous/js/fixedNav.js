
const fixedNav = {
  stick: (function () {
    document.addEventListener('scroll', function(e) {
    let wrap = document.querySelector('nav')
    let logo = document.querySelector('.nav-logo')
    let fixPoint = parseInt(getComputedStyle(wrap).getPropertyValue('top'))
    let scrollTop = document.body.scrollTop
    wrap.classList.toggle('fixed', scrollTop > fixPoint)
    logo.classList.toggle('fixed', scrollTop > fixPoint)
    })
  })
}

export default fixedNav