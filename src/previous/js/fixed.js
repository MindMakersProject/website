
const Fixed = {
	load: (function () {
      document.addEventListener('scroll', function(e) {
      	var wrap = document.querySelector('nav')
      	let fixPoint = parseInt(getComputedStyle(wrap).getPropertyValue('top'))
      	wrap.classList.toggle('fixed', document.body.scrollTop > fixPoint)
      })
  })
}

export default Fixed