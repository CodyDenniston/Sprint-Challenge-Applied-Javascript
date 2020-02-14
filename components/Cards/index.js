const cards = document.querySelector( '.cards-container' );
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
         res = Object.values( response.data.articles );
         res.forEach( el => {
            el.forEach( e => {
                cards.appendChild( CreateCard( e ) );
            });
         });
    })
    .catch( error => { consols.log(`Error: ${error}`) });

const CreateCard = ( obj ) => {
    const card = document.createElement( 'div'  );
    const head = document.createElement( 'div'  );
    const auth = document.createElement( 'div'  );
    const cont = document.createElement( 'div'  );
    const img  = document.createElement( 'img'  );
    const by   = document.createElement( 'span' );

    card.classList.add( 'card'          );
    head.classList.add( 'headline'      );
    auth.classList.add( 'author'        );
    cont.classList.add( 'img-container' );

    head.textContent = obj.headline;
    by.textContent   = `By ${ obj.authorName }`;
    img.setAttribute( 'src', obj.authorPhoto );
    
    card.appendChild( head );
    card.appendChild( auth );
    auth.appendChild( cont );
    cont.appendChild( img  );
    auth.appendChild( by   );
    return card;
};