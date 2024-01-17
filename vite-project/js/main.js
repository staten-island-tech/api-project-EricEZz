import { DOMSelectors } from './dom.js';

const URL = `https://pokeapi.co/api/v2/item/?limit=1000`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const dataResults = data.results;

    async function getitems(item) {
      const itemResponse = await fetch(item.url);
      const itemData = await itemResponse.json();
      return {
        name: item.name,
        category: itemData.category.name,
        img: itemData.sprites.default,
      };
    }

    function themes() {
      document.querySelector(".button").addEventListener("click", function () {
        if (document.body.classList.contains("light")) {
          document.body.classList.add("dark");
          document.body.classList.remove("light");
        } else {
          document.body.classList.add("light");
          document.body.classList.remove("dark");
        }
      });
    }

    function clearFields() {
      DOMSelectors.container.innerHTML = "";
    }

    async function load(items) {
      items.forEach((item) =>
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <h2 class="card-head">${item.name}</h2>
            <p>Category: ${item.category}</p>
            <img src="${item.img}" alt="${item.name}">
           </div>`
        )
      );
    }
    load(await Promise.all(dataResults.map(getitems)));
    themes();

    DOMSelectors.buttons.addEventListener("click", async function () {
      clearFields();
      load(await Promise.all(dataResults.map(getitems)));
    });
    DOMSelectors.searchInput.addEventListener("input", async function (event) {
      const look = event.target.value.toLowerCase();
      const filters = dataResults.filter((item) =>
        item.name.toLowerCase().includes(look)
      );

      clearFields();
      load(await Promise.all(filters.map(getitems)));
    });
  } catch (error) {
    console.log(error, "unlucky");
    document.querySelector("h1").textContent = "No items";
  }
}

getData(URL);

        // async function getstuff(item){
        //     const getback = await fetch(item.URL);
        //     const itemdata = await getback.json();
        //     return{
        //         name: item.name,
        //         catergory: itemdata.catergory.name,
        //         img: itemdata.sprites.default,
        //         effects: itemdata.effect_entries
        //     }
        // }
      /*   async function itemimg(results) {
            const Response = await fetch(results.url);
            const itemData = await Response.json();
            return {
                name: results.name,
                image: itemData.sprites.default , 
            };
        } */
        
        // document.querySelector("h1").textContent = data.content;

        // async function getstuff(item) {
        //     const getback = await fetch(item.url);
        //     const itemData = await getback.json();
        //     return {
        //       name: item.name,
        //       category: itemData.category.name,
        //       img: itemData.sprites.default,
        //       effects: itemData.effect_entries,
        //     };
        //   }
      
        //   async function searchItems(search) {
        //     const filteredItems = dataResults.filter((item) =>
        //       item.name.toLowerCase().includes(search.toLowerCase())
        //     );
        //     const detailedItems = await Promise.all(filteredItems.map(getstuff));
      
        //     clearFields();
      
        //     if (detailedItems.length > 0) {
        //       load(detailedItems);
        //     } else {
        //       DOMSelectors.container.innerHTML = "<p>No items found</p>";
        //     }
        //   }
      
        //   load(dataResults);
        //   themes();
      
        //   DOMSelectors.searchInput.addEventListener("input", (event) => {
        //     searchItems(event.target.value);
        //   });
      
        //   DOMSelectors.buttons.addEventListener("click", function () {
        //     clearFields();
        //     load(dataResults);
        //   });
        // async function search(stuff) {
        //     const itemsfilter = dataresults.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        //     const pokemonDetail = await Promise.all(itemsfilter.map(pokemonImage));
            
        //     const cardsContainer = document.querySelector(".cards");
        //     cardsContainer.innerHTML = "";

        //     if (pokemonDetail.length > 0) {
        //         insertPokemon(pokemonDetail);
        //     } else {
        //         cardsContainer.innerHTML = "<p>Loser cant even spell the name right LOOOL</p>";
        //     }
        // }
        // DOMSelectors.buttons.addEventListener("click", function(){
        //     buttons.forEach( result =>
        //         DOMSelectors)
        // })


//         function info(){
//             let x = document.querySelectorAll(".button")
//             x.forEach((ob)=> ob.addEventListener("click"), async function(){
//                 pokeitems();  
//             })
//         }
//         info()
// async function pokeitems(x){
// let dat = `https://pokeapi.co/api/v2/item/${x}`;
// console.log(dat)
// }

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