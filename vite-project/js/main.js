import {DOMSelectors} from './Dom.js' 
const URL = `https://pokeapi.co/api/v2/item?limit=2110`

function clearFields(){
    DOMSelectors.container.innerHTML = ""; 
};

function load(){
    clearFields();
URL.forEach(item => DOMSelectors.container.insertAdjacentHTML(
    "beforeend" , 
        `  <div class="card">
        <h2 class="card-head" >${item.name}</h2>
        <img src = ${cam.img} class = "card-img"/>
           <h3 class="card">${cam.price}</h3>
           </div>`)

)};
load();

// filter by items by usage 
// list items 

/*  async function getData(URL){
    try{
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON 
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
    } catch(error) {
        console.log(error, "uh oh!");
        document.querySelector("h1").textContent = "No cat :(";
    }
}
getData(URL);   */
 
/* fetch(URL)
.then(response => {
    if (!response.ok) {
        throw new Error (`Did not work`);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.error(`Error:`,error);
}); */

// 