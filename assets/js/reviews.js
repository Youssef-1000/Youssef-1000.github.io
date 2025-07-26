const reviews = [
        {
    initials: 'JY',
    name: 'Jessica',
    type: 'Parent from Nottingham',
    date: '23 Jul',
    content: `I am really happy to have Youssef to help my son on Maths. My son always says Youssef could make him truly understand some difficult concepts so he is happy to have the lessons even during the holidays. Thank you Youssef helps my son to build up a concrete foundation on his learning path.`,
    rating: 5
  },
      {
    initials: 'BM',
    name: 'Beth',
    type: 'Parent from Birmingham',
    date: '23 Jul',
    content: `My daughter who is going in to yr 9 has just had her first lesson with Youssef. She has SEN and the secondary school environment can be overwhelming for her, which has led her to fall behind in some areas.
Youssef responded to my enquiry quickly, he was confident he could help my daughter and he had a positive outlook.
We discussed some known areas of difficulty and then I left them to the lesson.
Youssef was quick to put my daughter at ease and she liked his approach. I was impressed with the resources available on the platform and she interacted and engaged in the lesson better than I was expecting.
After the lesson I received a report via eail about what had been covered, areas that went well and areas to focus on during future lessons.
We have arranged a regular slot and we're hopeful this will help build her confidence and ability.`,
    rating: 5
  },
      {
    initials: 'RS',
    name: 'Rebecca',
    type: 'Parent from Morden',
    date: '16 Jul',
    content: `My children recently had their first tutor session with Youssef. They have SEN and struggle with Maths. Youssef was very patient in his teaching approach and keen to understand their way of thinking/understanding. The lesson was interactive and engaging and I would definitely recommend based on this.`,
    rating: 5
  },
    {
    initials: 'SS',
    name: 'Shahab',
    type: 'Parent from Hitchin',
    date: '10 Jul',
    content: `We’re incredibly grateful to Youssef for the fantastic support he’s given our son in maths. Thanks to his clear, engaging teaching and encouragement, our son achieved the highest score in his set across the year group.

Youssef’s patient and tailored approach helped build both confidence and a deeper understanding of the subject. We couldn’t recommend him more highly — an excellent tutor and a real professional.`,
    rating: 5
  },
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
