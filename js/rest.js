const loadCountries = () => {
    fetch ('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then (data => displayCountries(data));
}


const displayCountries = country =>{
    console.log (country);
}


loadCountries();