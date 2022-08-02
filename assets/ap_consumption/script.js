//E_Korbi
'use strict';
const countriesContainer = document.querySelector('.countries');
const displayCountry = function (data) {
    const html = `<article class="country">
          <img class="country_img" src="${data.flags.png}" />
          <div class="country_main">
            <h3 class="country_name">${data.name.common}</h3>
            <h4 class="country_region">${data.region}</h4>
            <p class="country_info"><span>Population:</span>${data.population.toLocaleString()}</p>
            <p class="country_info"><span>Language:</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country_info"><span>Currency:</span>${
              Object.values(data.currencies)[0].name
            }</p>
            <p class="country_info"><span>Subregion:</span></span>${
              data.subregion
            }</p>
            <p class="country_info"><span>Capital:</span>${data.capital}</p>
            <p class="country_info"><span>Area:</span>${data.area.toLocaleString()}</p>
            <p class="country_info"><span>StreetMap:</span><a href=${
              Object.values(data.maps)[1]
            } target=_blank>MapLink</a></p>
    
          </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    countriesContainer.style.visibility = 'visible';

};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (data) {
    console.log(data);
    displayCountry(data[0]);
    
  }).catch(error => console.error(`Country not found!, ${error}`));
};
const info = prompt('Type the name of any country and get information 🗺');
getCountryData(info);