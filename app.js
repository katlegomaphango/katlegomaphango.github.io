const toggleBtn = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav')

const currentPath = window.location.pathname
const navLinks = document.querySelectorAll('.nav-link')

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})

navLinks.forEach(link => {
    if (link.getAttribute('href') === `.${currentPath}`) {
        link.classList.add('active')
    }
})