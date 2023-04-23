// const projects = [
//   {
//     title: 'Split it',
//     description: "Split It is an application developed by myself and my team in two weeks as a final project during my participation in Le Wagon bootcamp. It's a Mobile first app to help couples or groups of friends split costs for larger events like trips or monthly expenses. Allows you to scan a photo of a receipt and then automatically fills in the total and the name of the store. Automatically splits the total between all the members of the group and says who should pay whom and how much. This project taught me a lot about Mobile first development. I also learned a lot about Google cloud services such as their Vision API and OCR and setting up a PWA.",
//     tech: ["devicon-rails-plain", "devicon-ruby-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-sass-original", "devicon-googlecloud-plain", "devicon-heroku-original", "devicon-postgresql-plain", "devicon-git-plain", "devicon-github-original"],
//     image: 'https://i.imgur.com/aG0f5a8.png',
//     deployed: 'http://www.split-it.me/',
//     git: 'https://github.com/SimonBystrom/split-it',
//     device: 'iphone-8',
//   },
//   {
//     title: 'Movie Ratings',
//     description: "Movie Ratings is a project I built for my wife and myself. The website lets two users rate the same movie and saves your ratings in the browser. Once you've rated 5 movies it will give you recommendations based on what both you and the other user liked. I learned a lot about async / await and how to properly call an API. I also gained some invaluable experience deploying on a cloud-based service like Firebase.",
//     tech: ["devicon-react-original", "devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-firebase-plain", "devicon-git-plain", "devicon-github-original"],
//     image: 'https://i.imgur.com/BrfuKvK.png',
//     deployed: 'https://movieratings-9f806.firebaseapp.com/',
//     git: 'https://github.com/SimonBystrom/movieRating',
//     device: 'macbook',
//   },
//   {
//     title: 'Chef_Space',
//     description: "Chef_Space is an AirBnB like marketplace site to help chefs without a restaurant open up pop-up restaurants for a short time by connecting them to location owners who wish to rent out their space. This was a one week project at the coding bootcamp I attended, Le Wagon. During this project I learnt a lot about how relational-databases work, both N:1 and N:N relations. This was also the first site I had ever deployed to Heroku giving me experience with not just one but 2 different ways of deploying sites. One platform built on AWS through Heroku and one built by Google through Firebase.",
//     tech: ["devicon-rails-plain", "devicon-ruby-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-sass-original", "devicon-googlecloud-plain", "devicon-heroku-original", "devicon-postgresql-plain", "devicon-git-plain", "devicon-github-original"],
//     image: 'https://i.imgur.com/mV4QS4v.png',
//     deployed: 'http://chefspace.herokuapp.com/',
//     git: 'https://github.com/SimonBystrom/bill-bnb',
//     device: 'macbook',
//   },
//   {
//     title: 'Youtube-clone',
//     description: "Youtube-Clone is a UI / design challenge I gave myself to practice CSS and to create clean React Components. During this project I learnt how to use CSS Grid and Flexbox. I also gained a better understanding of the how much responsibility a React component should have in a larger context. The site is deployed on GitHub pages.",
//     tech: ["devicon-react-original", "devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-git-plain", "devicon-github-original"],
//     image: 'https://i.imgur.com/d6FGgZ2.png',
//     deployed: 'https://simonbystrom.github.io/YouTube-clone-DESIGN-/',
//     git: 'https://github.com/SimonBystrom/YouTube-clone-DESIGN-',
//     device: 'macbook',
//   }
// ]
const projects = [
  {
    title: 'Engraving App',
    description: 'Allows the customers to preview what the engraving on their engagement rings and wedding bands would look like as well as helping staff members to create said engravings by scanning and sending created engravings to the backoffice engraving machines',
    tech: ["devicon-react-original", "devicon-nextjs-original", 'devicon-typescript-plain', "devicon-html5-plain", "devicon-sass-original", "devicon-mongodb-plain", "devicon-digitalocean-plain", "devicon-git-plain", "devicon-github-original"],
    image: '/photos/Engraving-app.png',
    movie: '/videos/engraving-app.mp4',
    // deployed: 'http://www.split-it.me/',
    // git: 'https://github.com/SimonBystrom/split-it',
    device: 'iphone-8',
  },
  {
    title: 'The Unnamed Society',
    description: 'Headless EC-site for hand-made collectors items. Started as a landing page to help drive traffic to the newly created brand and ended with a fully headless ec-site using, at the time, the newly released Hydrogen framework by Shopify and completely customizable through the CMS Sanity.',
    tech: ["devicon-react-original", "devicon-typescript-plain", "devicon-html5-plain", 'devicon-sass-original', "devicon-git-plain", "devicon-github-original"],
    image: '/photos/tus.png',
    movie: '/videos/tus-compressed-v2.mp4',
    deployed: 'https://www.theunnamedsociety.com/',
    // git: 'https://github.com/SimonBystrom/movieRating',
    device: 'macbook',
  },
  {
    title: 'Cream Sitre',
    description: "Rebuild of Cream's company website. The website was previously built with PHP and vanilla JS and hosted on WordPress. However to take the site into the modern age we decided to rebuild it with Next, use Prismic as the CMS and host it on Vercel. This was a fun project to try and maintain both the UI/UX of the previous site while making various smaller improvements and translating the old code into a more modern framework.",
    tech: ["devicon-react-original", "devicon-nextjs-original", 'devicon-typescript-plain', "devicon-html5-plain", "devicon-sass-original", "devicon-git-plain", "devicon-github-original"],
    image: '/photos/cream-site.png',
    movie: '/videos/cream-compressed.mp4',
    deployed: 'https://www.cream-touch.com',
    // git: 'https://github.com/SimonBystrom/bill-bnb',
    device: 'macbook',
  },
  // {
  //   title: 'Youtube-clone',
  //   description: "Youtube-Clone is a UI / design challenge I gave myself to practice CSS and to create clean React Components. During this project I learnt how to use CSS Grid and Flexbox. I also gained a better understanding of the how much responsibility a React component should have in a larger context. The site is deployed on GitHub pages.",
  //   tech: ["devicon-react-original", "devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-git-plain", "devicon-github-original"],
  //   image: 'https://i.imgur.com/d6FGgZ2.png',
  //   deployed: 'https://simonbystrom.github.io/YouTube-clone-DESIGN-/',
  //   git: 'https://github.com/SimonBystrom/YouTube-clone-DESIGN-',
  //   device: 'macbook',
  // }
]

export {projects}
