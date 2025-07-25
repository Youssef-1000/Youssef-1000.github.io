function setupEvents() {

  document.querySelectorAll('a[href="#book"]').forEach(button => {
    button.addEventListener('click', () => {
      gtag('event', 'book_click', {
        event_category: 'engagement',
        event_label: button.closest('nav') ? 'nav_button' : 'hero_button',
      })
    })
  })

  const anchorLinks = document.querySelectorAll('nav a[data-link]')

  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768
      gtag('event', 'nav_click', {
        event_category: 'navigation',
        event_label: link.dataset.link,
        value: isMobile ? 'mobile' : 'desktop'
      })
    })
  })

  document.querySelectorAll('a[href^="http"]').forEach(link => {
    const currentHost = window.location.hostname
    const url = new URL(link.href)

    if (url.hostname !== currentHost) {
      link.addEventListener('click', function () {
        gtag('event', 'click_outbound', {
          event_category: 'outbound',
          event_label: link.href,
          transport_type: 'beacon'
        })
      })
    }
  })

  document.querySelector('#booking-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const button = event.target.querySelector('button[type="submit"]')
    
    const formData = new FormData(event.target)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    gtag('event', 'book', {
      event_category: 'engagement',
      event_label: 'Booking Form',
      value: 1
    })

    emailjs.send('s_service', 'template_contact', templateParams)
      .then(() => {
        alert('Thank you! I\'ll get back to you soon.')
        button.disabled = false
        button.textContent = 'Send Message'
        event.target.reset()
      })
      .catch((error) => {
        console.error('Email send failed:', error)
        alert('Sorry, there was an error sending your message. Please try again.')
      })
    
    button.disabled = true
    button.textContent = 'Sending...'
      
  })

}