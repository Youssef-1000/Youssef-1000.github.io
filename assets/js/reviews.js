const reviews = [
  {
    initials: 'AM',
    name: 'Aneta',
    type: 'Parent from Valencia',
    date: '10 Jul',
    content: `Youssef is a super patient tutor that explains difficult topics in a easy to understand way. We can see great improvement that reflected in our son’s final exam of Y8. We just wish we had started earlier with his tutoring :)`,
    rating: 5
  },
  {
    initials: 'KA',
    name: 'Kirsty',
    type: 'Parent from Swindon',
    date: '18 Jun',
    content: `A 5* review from us. Youssef is friendly, relatable and explains things clearly. My son came away from the session saying he, "Actually didn't hate learning for once" and, "Felt confident by the end of the first session" that he could take the learning forward into his GCSE year. Thanks Youssef - J is looking forward to working with you more over the coming weeks. I look forward to seeing his confidence grow further.`,
    rating: 5
  },
  {
    initials: 'AW',
    name: 'Alan',
    type: 'Parent from Bedford',
    date: '4 Jun',
    content: `Youssef is a very talented teacher who has provided a great learning experience for my son, who needed to be stretched beyond his regular maths lessons. My son looks forward to his weekly lessons and his love of maths is stronger than ever`,
    rating: 5
  },
  {
    initials: 'NB',
    name: 'Naia',
    type: 'Student',
    date: '2 Jun',
    content: `Youssef is very supportive, patient and he is great at explaining things when I am confused about a question. He has been really helpful!`,
    rating: 5
  },
  {
    initials: 'AM',
    name: 'Aneta',
    type: 'Parent from Valencia',
    date: '22 May',
    content: `My son (Y8, KS3) really enjoys math's classes with Youssef! He finds it super helpful and he seems to become more confident with the tasks after each lesson. Youssef is very supportive, patient and calm, explaining everything in understandable way.`,
    rating: 5
  },
  {
    initials: 'SS',
    name: 'Shahab',
    type: 'Parent from Hitchin',
    date: '21 May',
    content: `Youssef has been an excellent math tutor for my son. He provides clear, patient explanations that make complex topics much easier to understand. He's especially helpful with areas my son is currently learning or hasn't yet covered in school, offering the support and confidence my son needs to keep up and succeed. His calm and thoughtful approach has made a real difference in my son's progress and enjoyment of the subject.`,
    rating: 5
  },
  {
    initials: 'MK',
    name: 'Menelaos',
    type: 'Parent from Banbury',
    date: '26 Feb',
    content: `Great Tutor with deep understanding of the question and has techniques that are easy to understand`,
    rating: 5
  },
  {
    initials: 'MK',
    name: 'Menelaos',
    type: 'Parent from Banbury',
    date: '21 Feb',
    content: `Great tutor really helpful really polite and engages with you throughout the whole lesson I fully recommended him as your maths tutor !`,
    rating: 5
  },
]


function renderReviews() {
  const starIcon = `<img src="assets/icons/star.svg" alt="star" class="h-4 w-4" />`

  const container = document.querySelector('#reviews-carousel')
  const reviewsHtml = reviews.map(r => `
    <div class="px-4 box-border">
      <div data-aos="fade-up" class="flex-1 min-w-0 bg-neutral-50 rounded-2xl p-6 flex flex-col gap-3 items-start h-auto">
        <div class="flex items-center gap-3 mb-2">
          <div class="bg-neutral-100 text-neutral-700 font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">${r.initials}</div>
          <div>
            <div class="font-semibold text-neutral-900 leading-tight">${r.name}</div>
            <div class="text-xs text-gray-500">${r.type} • ${r.date}</div>
          </div>
        </div>
        <div class="flex gap-1">${starIcon.repeat(r.rating)}</div>
        <p class="leading-relaxed tracking-wide text-sm text-neutral-800">${r.content}</p>
      </div>
    </div>
  `).join('')
  container.innerHTML = reviewsHtml

  if (reviews.length > 0) {
    $("#reviews-carousel").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      responsive: {
        0: { items: 1 },
        640: { items: 1 },
        1024: { items: 2 },
        1280: { items: 3 }
      },
      navContainerClass: "owl-nav justify-center flex space-x-4 mt-4",
      navText: [
        `<span aria-label="prev" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
         </span>`,
        `<span aria-label="next" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
         </span>`
      ],
    })
  }
}
