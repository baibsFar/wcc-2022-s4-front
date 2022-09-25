(function() {

    const cheeseBtn = document.querySelector('.navbar-mobile-cheese')
    const mobileMenu = document.querySelector('.mobile-menu')
    const exitMobileMenuBtn = document.querySelector('.exit-mobile-menu')

    cheeseBtn.addEventListener('click', () => {
        mobileMenu.style.height = '100vh'
    })

    exitMobileMenuBtn.addEventListener('click', () => {
        mobileMenu.style.height = '0'
    })

})()