const projects = [
  {
    title: 'Split it',
    description: 'Final project (2 weeks) built during my time at Le Wagon bootcamp. Mobile first app to help couples or groups of friends split costs for larger events like trips or monthly expenses. Allows the user to scan a photo of a receipt and then automatically fills in the total and the name of the store. Automatically splits the total between all the members of the group and says who should pay whom and how much. This project taught me a lot about Mobile first development. I also learned a lot about Google cloud services such as their Vision API and OCR.',
    tech: ["devicon-rails-plain", "devicon-ruby-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-sass-original", "devicon-googlecloud-plain", "devicon-heroku-original", "devicon-postgresql-plain", "devicon-git-plain", "devicon-github-original"],
    image: 'https://previews.dropbox.com/p/thumb/ABPwFZHZcehocOAvKEnG6LMZ4MvwDvb2YtVy7mWDHH6MEm_5tqLIu9umKXiSMLJb7Hbvj7FmeJ8xXRfCi26o4KXv84tfHlLLPcEoALzHbg52QV8itgu6nDq0TXcwsdIxVKgYo2T_ilcizxG9pmVMvOmYUGcI0K6qLvRM3czKTkAM20BgqqnYWwy5XSc5iYUvML0gN27VQjCtlLe8CS9NyFEzhSZzvK7LT1dYG_b8ZeWYI9A1m89kR1G7WHzH-CbrnwerlS3Zvf4z0GCGlZsjR8LdiwEtt3L3H2orxh3wfcv9Izh1R0JLid_mTV1RPk52cPdqN7pfKCOoJr5E7zIONU18EdNrSSYTTZXLSBlc40GcHg/p.png?fv_content=true&size_mode=5',
    deployed: 'http://www.split-it.me/',
    git: 'https://github.com/SimonBystrom/split-it',
    device: 'iphone-8'
  },
  {
    title: 'Movie Ratings',
    description: "Personal project I built for my wife and I. The website lets two users rate the same movie and saves your ratings in the browser. Once you've rated 5 movies it will give you recommendations based that both you and the other user liked! I learned a lot about async / await and how to properly call an API. I also gained some invaluable experience with deploying on a cloud-based service like Firebase.",
    tech: ["devicon-react-original", "devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-firebase-plain", "devicon-git-plain", "devicon-github-original"],
    image: 'https://previews.dropbox.com/p/thumb/ABOUIqcQkT3w9NXT1Ps-Wg8tTTg9P3-UWNR7oAnZiuTlc3ltsnw766IJCRTX3_ys0ARG0XL8a11HtGWtGP9Ou0T9m_Eh8jN1ISSyTGYqw3vPQSUCv9R41XWhacZRrNLxicQaNZO_r-aurRAMkwzN1Cl7c4Vny0SKnrIuqxN3wa833URnXm-OUWoULWSbdDKm_5razD3JJ_u7RaZYYmiX493hkz3TTsxESq_ZYq-E1uSy2JSLbtRJK0bx1MaFAqNp6uIDtgEh9vZ-hoHKbLvHbsV1nvjLJTSimBTw74de5LuOHC_Og5EJerkk7nlvyQWVg0DDiuKI8h4ryzj9ufHwe23_1cv5TgaFrVSHX9WUf_HS0A/p.png?fv_content=true&size_mode=5',
    deployed: 'https://movieratings-9f806.firebaseapp.com/',
    git: 'https://github.com/SimonBystrom/movieRating',
    device: 'macbook'
  },
  {
    title: 'Chef_Space',
    description: "AirBnB like marketplace site to help chefs without a restaurant open up pop-up restaurants for a short time by connecting them to location owners who wishes to rent out their space. (1 week project at Le Wagon). During this project I learnt a lot about how relational-databases work both N:1 and N:N. This was also the first site I had ever deployed to Heroku giving me experience with not just one but 2 different ways of deploying sites. One platform built on AWS with Heroku and one built by Google with Firebase.",
    tech: ["devicon-rails-plain", "devicon-ruby-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-sass-original", "devicon-googlecloud-plain", "devicon-heroku-original", "devicon-postgresql-plain", "devicon-git-plain", "devicon-github-original"],
    image: 'https://previews.dropbox.com/p/thumb/ABOGHk_l10gOhiStb58Q1TldCPwtHNNJsj18KTeKA5e1lMp-f9n-NZ_TrEoWS9Vwad9GjDH0lstLjuS1fXhiaVeNk04LVnBPzXE959vwmbEuAkZ5SR41DiPc7wXFPDYZVoCh1SRGWsJU3atKF1sSWBVvWSpuz3jCSB6iYR0k63FAktBn1WDZ13flQ1cG8-F3V8wxIBHq_aCLlcp2jPrRfQTbR7l69jCzQMcgGzOGG-3gomRgimYPnXBdJLUBgmYamo22A5gSCnI66CgW74zCQkrMjbqqfxDTZtmcgxGoV4zwWJJ_evBn9SL0p1B56ra6-wG55XxZdEeFIJUtYPoh3xlK35py8NBQCOUu2soJHPJ74Q/p.png?fv_content=true&size_mode=5',
    deployed: 'http://chefspace.herokuapp.com/',
    git: 'https://github.com/SimonBystrom/bill-bnb',
    device: 'macbook'
  },
  {
    title: 'Youtube-clone',
    description: "A UI / design challenge I gave myself to practice CSS and creating clean React Components. During this project I learnt how to use CSS Grid and Flexbox. I also gained a better understanding of the how much responsibility a React component should have in a larger context. The site is deployed on GitHub pages.",
    tech: ["devicon-react-original", "devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-git-plain", "devicon-github-original"],
    image: 'https://previews.dropbox.com/p/thumb/ABNcpV3-TKfWy7oOSaksWbAzc1BQGbGim9G9K0LI3e15MpkYiB2cM94C5OxDRnzrspKYgH6qSHeYIxopX5e0jb-hWFMKSCx7_kq6wkGw9dvyeO9b68rF_u5lLJR12vuUz9mka0qM3-oRZJsJzN2x8LDuFQwz13k4fGNSL6spIy-S-d1BgWeUu5Yj9Zw_ZLxl_25svg4SgMiXjwLOMf51UmVe9SK56sOaUpjoF8YteNFuirHdCLMKu_iEjYlfvXzOG5XpJ0plhs8wxrLXtIHFkzTLhaA0ZlI0jxD27RL2FcsATDZU0O59MuSIpme17rm6RXHAOViJO4s3ljctVNnbFRRMrrDrDjmu0-oOpOdekeZtig/p.png?fv_content=true&size_mode=5',
    deployed: 'https://simonbystrom.github.io/YouTube-clone-DESIGN-/',
    git: 'https://github.com/SimonBystrom/YouTube-clone-DESIGN-',
    device: 'macbook'
  }
]

export {projects}
