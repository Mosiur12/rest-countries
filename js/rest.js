const loadCountries = () => {
    fetch ('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then (data => displayCountries(data));
}


const displayCountries = countries =>{
    // console.log (countries);
    const countriesHTML = countries.map (country => getCountries (country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('country');
    container.innerHTML = countriesHTML.join(' ');
}

  const getCountries = country => {
  
    return `
    <div class = "country"> 
    <h1> ${country.name} </h1>
    <img src = "${country.flags.png}">
    </div>
    
    
    `

  }

loadCountries();



