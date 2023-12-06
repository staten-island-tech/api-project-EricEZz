const URL = `https://superheroapi.com/api/919896406421505`
console.log(URL);
/* async function getData(URL){
    try{
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON 
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
    } catch(error) {
        console.log(error, "uh oh!");
        document.querySelector("h1").textContent = "No pokemen";
    }
}
getData(URL); */