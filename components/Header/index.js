// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
const headerContainer = document.querySelector('.header-container')
//new elements
const header = document.createElement('div');
const _date = document.createElement('span');
const _title = document.createElement('h1');
const _temp = document.createElement('span');


//classNames
header.classList.add('header');
_date.classList.add('date');
_temp.classList.add('temp');

//textContent
_date.textContent = 'SMARCH 28, 2019';
_title.textContent =  'LAMBDA TIMES';
_temp.textContent = '98°';

//structure of elements
header.appendChild(_date);
header.appendChild(_title);
header.appendChild(_temp);

headerContainer.appendChild(header);
}

Header();

