// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//const axios = require('axios');

const entryPoint = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data.topics);
    response.data.topics.map(item => {
        entryPoint.append(Tab(item));
    })
})

function Tab(item){
    //create element
const _tab = document.createElement('div')

_tab.classList.add('tab')

_tab.append(item);

return _tab;
}