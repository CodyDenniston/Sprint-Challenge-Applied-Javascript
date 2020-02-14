
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles.javascript.headline)
})

function Articles(card, headline, author, img){
//create elements
const cardsContainer = document.createElement
const _card = document.createElement('div');
const _headline = document.createElement('div');
const _author = document.createElement('div');
const _imgContainer = document.createElement('div');
const _imgSrc = document.createElement('img src');
const _span = document.createElement('span');

//classNames
_card.classList.add('card');
_headline.classList.add('headline');
_author.classList.add('author');
_imgContainer.classList.add('img-container');

//textContent
_headline.textContent = headline;
_imgSrc.src = img;
_span.textContent = `By ${author}`;

//append
_card.appendChild(_headline);
_card.appendChild(_author);
_author.appendChild(_imgContainer);
_imgContainer.appendChild(_imgSrc);
_imgContainer.appendChild(_span);

}

