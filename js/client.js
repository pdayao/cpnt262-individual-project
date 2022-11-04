'use strict';

const section = document.querySelector('.films');

const fetchData = async function(endpoint) {
  try {
    const response = await fetch(endpoint);
    const films = await response.json();
  
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  
    // Create our accumulator variable
    let output = '';
  
    const handleFilm = function(film) {
      // Gradually add items to our post with each iteration
      output += `
      <article>
        <h2>${film.title}</h2>
        <img src="${film.image}" alt="Movie poster of ${film.title}">
        <ul>
          <li>id: ${film.id}</li>
          <li>Title: ${film.title}</li>
          <li>Original Title: ${film.original_title}</li>
          <li>Original Title (Romanization): ${film.original_title_romanised}</li>
          <li>Description: ${film.description}</li>
          <li>Director: ${film.director}</li>
          <li>Producer: ${film.producer}</li>
          <li>Release Date: ${film.release_date}</li>
          <li>Running Time: ${film.running_time}</li>
          <li>Rotten Tomato Score: ${film.rt_score}</li>
          <li>People: 
            <a href="${film.people}">${film.people}</a>
          </li>
          <li>Species: 
            <a href="${film.species}">${film.species}</a>
          </li>
          <li>Locations: 
            <a href="${film.locations}">${film.locations}</a>
          </li>
          <li>Vehicles:
            <a href="${film.vehicles}">${film.vehicles}</a>
          </li>
          <li>URL:
            <a href="${film.url}">${film.url}</a>
          </li>
        </ul>
      </article>
      `;
    }
  
    // Loops through the data
    films.forEach(handleFilm);
  
    // Output the HTML to the page
    section.innerHTML = output;

  } catch (error) {
    section.innerHTML = `<h2>There was an error</h12>
                        <p>${error.message}</p>`;
  }

}

fetchData('https://ghibliapi.herokuapp.com/films');