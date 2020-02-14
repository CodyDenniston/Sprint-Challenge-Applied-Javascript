const cardContainer = document.querySelector( '.cards-container' );
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
         res = Object.values( response.data.articles );
         res.forEach( element => {
            element.forEach( article => {
                cardContainer.appendChild( CreateCard( article ) );
            });
         });
    })
    .catch( error => { console.log(`Error: ${error}`) });

const CreateCard = ( item ) => {
    const card = document.createElement( 'div'  );
    const headline = document.createElement( 'div'  );
    const author = document.createElement( 'div'  );
    const container = document.createElement( 'div'  );
    const img  = document.createElement( 'img'  );
    const by   = document.createElement( 'span' );

    card.classList.add( 'card'          );
    headline.classList.add( 'headline'      );
    author.classList.add( 'author'        );
    container.classList.add( 'img-container' );

    headline.textContent = item.headline;
    by.textContent   = `By ${ item.authorName }`;
    img.setAttribute( 'src', item.authorPhoto );

    card.appendChild( head );
    card.appendChild( auth );
    author.appendChild( cont );
    container.appendChild( img  );
    author.appendChild( by   );
    return card;
};