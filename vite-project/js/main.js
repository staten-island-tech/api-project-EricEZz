const URL = `https://pokeapi.co/api/v2/item?limit=2110`












//https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_Kc9B34VPmJZP7JgVkWX1BLcmB0eZ1H9mHLpCdNIXnxaz121Aq5Wevar8dpFbH3h

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