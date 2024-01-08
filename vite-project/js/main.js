import {DOMSelectors} from './dom.js' 
const URL = `https://pokeapi.co/api/v2/item/?limit=21100`
async function getData(URL){

    try{
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON 
        const data = await response.json();
        const dataresults = data.results;
        
      /*   async function itemimg(results) {
            const Response = await fetch(results.url);
            const itemData = await Response.json();
            return {
                name: results.name,
                image: itemData.sprites.default , 
            };
        } */
        
        // document.querySelector("h1").textContent = data.content;
        function themes(){
            document.querySelector(".but").addEventListener("click",function(){
                if(document.body.classList.contains("light")){
                    document.body.classList.add("dark");
                    document.body.classList.remove("light");
                } else{
                    document.body.classList.add("light");
                    document.body.classList.remove("dark");
                }
            });
            }
            function clearFields(){
                DOMSelectors.container.innerHTML = ""; 
            };
        function load() {
            data.results.forEach( obj => 
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend" , 
        `  <div class="card">
        <h3 class="card-head" >${obj.name}</h3>
        <button class="button">more info</button>
           </div>`
            )
            
        );}
        themes();
        load();
        // DOMSelectors.buttons.addEventListener("click", function(){
        //     buttons.forEach( result =>
        //         DOMSelectors)
        // })
        async function pokeitems(){

        }
        function info(){
            let x = document.querySelectorAll(".button")
            x.forEach((ob)=> ob.addEventListener("click"), async function(){
                clearFields();
                pokeitems();  
            })
        }

    } catch(error) {
        console.log(error, "unlucky");
        document.querySelector("h1").textContent = "No pokemon";
    }
}
getData(URL);   
//sprite.default

/* function themes(){
    document.querySelector(".but").addEventListener("click",function(){
        if(document.body.classList.contains("light")){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    });
    }
themes(); */

/* function clearFields(){
    DOMSelectors.container.innerHTML = ""; 
};

function load(){
info.forEach(item => DOMSelectors.container.insertAdjacentHTML(
    "beforeend" , 
        `  <div class="card">
        <h2 class="card-head" >${item.name}</h2>
        <img src = ${item.img} alt ="" class = "card-img"/>
           <h3 class="card">${item.price}</h3>
           </div>`)

)};
load(); */

// filter by items by usage 
// list items 

/*   async function getData(URL){
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
getData(URL);   
  */
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
