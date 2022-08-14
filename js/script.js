// Get Elements from HTML

let elForm = document.querySelector(".country__form");
let elInputSearch = document.querySelector(".country__search");
let elInputBtn = document.querySelector(".country__btn");
let elCountryWrapper = document.querySelector(".country__wrapper");
let elCountryTemplate = document.querySelector(".country__template").content;
let elCountryFlag = document.querySelector(".country__flag");
let elCountryName = document.querySelector(".country__name");
let elCountryCapital = document.querySelector(".country__capital");
let elCountryContinent = document.querySelector(".country__continent");
let elCountryPopulation = document.querySelector(".country__population");
let elCountryCurrency = document.querySelector(".country__currency");
let elCountryLanguage = document.querySelector(".country__language");


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let searchInputValue = elInputSearch.value.trim();
    let fetchUrl = `https://restcountries.com/v2/name/${searchInputValue}?fullText=true`;
    
    // console.log(fetchUrl);
    
    fetch(fetchUrl)
        .then((response) => response.json())
            .then((data) => {
                renderCountry(data, elCountryWrapper)
            });
});


// Render Country

function renderCountry(array, wrapper) {
    wrapper.innerHTML = null;

    let fragment = document.createDocumentFragment();

    for (const item of array) {
        let countryTemplate = elCountryTemplate.cloneNode(true);

        countryTemplate.querySelector(".country__flag").src = item.flags.svg;
        countryTemplate.querySelector(".country__name").textContent = item.name;
        countryTemplate.querySelector(".country__capital").textContent = item.capital;
        countryTemplate.querySelector(".country__continent").textContent = item.region;
        countryTemplate.querySelector(".country__population").textContent = item.population;
        countryTemplate.querySelector(".country__currency").textContent = item.currencies[0].name;
        countryTemplate.querySelector(".country__language").textContent = item.languages[0].name
    
        fragment.appendChild(countryTemplate)
    }

    
    wrapper.appendChild(fragment)
}


