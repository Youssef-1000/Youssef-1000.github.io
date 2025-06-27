function setupMobile() {
  const mobileOpen = document.querySelector('#mobile-nav-open')
  const mobileClose = document.querySelector('#mobile-nav-close')
  const aside = document.querySelector('#mobile-nav')
  const body = document.querySelector('body')
  const mobileNavLinks = aside.querySelectorAll('aside nav a')

  const showNav = () => {
    aside.classList.remove('pointer-events-none', 'opacity-0', '-left-full')
    aside.classList.add('pointer-events-auto', 'opacity-100', 'left-0')
  }

  const hideNav = () => {
    aside.classList.remove('opacity-100', 'left-0', 'pointer-events-auto')
    aside.classList.add('opacity-0', '-left-full', 'pointer-events-none')
  }

  mobileOpen?.addEventListener('click', showNav)
  mobileClose?.addEventListener('click', hideNav)
  mobileNavLinks?.forEach((node) => node.addEventListener('click', hideNav))
}