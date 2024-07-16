const toggleBtn = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav')

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})
